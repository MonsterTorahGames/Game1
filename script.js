// Game State
const GAME_STATE = {
    WAITING: 0,
    PLAYING: 1,
    GAME_OVER: 2,
    PAUSED: 3
};

let currentState = GAME_STATE.WAITING;
let streak = 0;
let bestStreak = parseInt(localStorage.getItem('whackWordBest')) || 0;
let timer = null;
let maxTime = 10000; // ms
let currentCorrectWord = null;
let isProcessing = false;

// Monster & Learning State
let monsterScale = 1.0;
let wordLives = {}; // Map word (hebrew) -> strikes (0 to 3)
let upcomingQueue = []; // Queue for spaced repetition
let earnedAccessories = []; // Accessories this session
let masteredWords = new Set(JSON.parse(localStorage.getItem('whackWordMastered')) || []);

// 100 Random Accessories (Emoji-based for variety)
const ACCESSORIES = [
    '🎩', '👑', '🎀', '🎁', '⭐', '🌟', '✨', '💫', '🔥', '❄️',
    '🌈', '🌸', '🌺', '🌻', '🌼', '🍀', '🍄', '🦋', '🐝', '🐞',
    '🦄', '🐸', '🐙', '🦑', '🦐', '🦀', '🐠', '🐟', '🐳', '🐋',
    '🦈', '🐊', '🐢', '🐍', '🦎', '🐉', '🐲', '🦕', '🦖', '🐘',
    '🦏', '🦛', '🐪', '🦒', '🦘', '🦡', '🦔', '🐿️', '🦇', '🦅',
    '🦆', '🦉', '🦚', '🦜', '🐌', '🐛', '🦗', '🕷️', '🦂', '💎',
    '💍', '💰', '🏆', '🎖️', '🏅', '🥇', '🎯', '🎲', '🎮', '🕹️',
    '🧩', '🎨', '🖌️', '🎭', '🎪', '🎢', '🎡', '🎠', '🚀', '🛸',
    '🌙', '☀️', '⚡', '🌊', '🔮', '🧿', '🪬', '🎵', '🎶', '🎸',
    '🥁', '🎺', '🎻', '🪘', '🍕', '🍔', '🍟', '🌮', '🍦', '🧁',
    '🍩', '🍪', '🍫', '🍬', '🍭', '🧸', '🪀', '🪁', '🎈', '🎉'
];

// DOM Elements
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const gameOverScreen = document.getElementById('game-over-screen');
const targetWordEl = document.getElementById('target-word');
const gridContainer = document.getElementById('grid-container');
const timerBar = document.getElementById('timer-bar');
const streakEl = document.getElementById('streak');
const bestStreakEl = document.getElementById('best-streak');
const feedbackEl = document.getElementById('feedback');
const finalScoreEl = document.getElementById('final-score');
const finalBestEl = document.getElementById('final-best');
// New Elements
const monsterEl = document.getElementById('monster');
const feedbackModal = document.getElementById('feedback-modal');
const mnemonicTextEl = document.getElementById('mnemonic-text');
const resumeBtn = document.getElementById('resume-btn');

// Teaching Phase Elements
const teachingModal = document.getElementById('teaching-modal');
const teachHebrewEl = document.getElementById('teach-hebrew');
const teachEnglishEl = document.getElementById('teach-english');
const teachingGrid = document.getElementById('teaching-grid');
const audioHint = document.getElementById('audio-hint');
const startRoundBtn = document.getElementById('start-round-btn');

// Audio (Synthetic)
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

function playTone(freq, type, duration) {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
}

function speakHebrew(text) {
    if (!window.speechSynthesis) return;
    
    // Stop any existing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'he-IL'; // Hebrew
    utterance.rate = 0.8; // Slightly slower for clarity
    
    // Fallback search for a Hebrew voice if default fails
    const voices = window.speechSynthesis.getVoices();
    const hebrewVoice = voices.find(v => v.lang.startsWith('he'));
    if (hebrewVoice) utterance.voice = hebrewVoice;
    
    window.speechSynthesis.speak(utterance);
}

// Helpers
function getRandomWords(count, targetOverride = null) {
    let choices = [];
    if (targetOverride) {
        choices.push(targetOverride);
    }
    
    // Fill rest with randoms
    while (choices.length < count) {
        const random = chumashWords[Math.floor(Math.random() * chumashWords.length)];
        // Avoid duplicates
        if (!choices.find(w => w.hebrew === random.hebrew)) {
            choices.push(random);
        }
    }
    
    return choices.sort(() => 0.5 - Math.random());
}

function updateHUD() {
    streakEl.innerText = streak;
    bestStreakEl.innerText = bestStreak;
}

function updateMonster() {
    // Check milestones
    const parts = [
        { score: 10, selector: '.leg' },
        { score: 20, selector: '.arm' },
        { score: 30, selector: '.belly' },
        { score: 40, selector: '.horn' }
    ];
    
    parts.forEach(part => {
        const elements = document.querySelectorAll(part.selector);
        if (streak >= part.score) {
            elements.forEach(el => el.classList.add('part-visible'));
        } else {
            elements.forEach(el => el.classList.remove('part-visible'));
        }
    });

    monsterEl.style.transform = `scale(${monsterScale})`;
}

function growMonster() {
    // Check if we should add an accessory (every 5 words)
    if (streak > 0 && streak % 5 === 0) {
        addRandomAccessory();
    }
    
    monsterEl.classList.add('happy');
    updateMonster(); // Check for body part evolution
    setTimeout(() => monsterEl.classList.remove('happy'), 500);
}

function addRandomAccessory() {
    // Pick a random accessory we haven't used yet
    const available = ACCESSORIES.filter(a => !earnedAccessories.includes(a));
    if (available.length === 0) return; // All accessories earned!
    
    const accessory = available[Math.floor(Math.random() * available.length)];
    earnedAccessories.push(accessory);
    
    // Create accessory element
    const accEl = document.createElement('div');
    accEl.className = 'accessory pop-in';
    accEl.innerText = accessory;
    
    // Random position around the monster
    const angle = Math.random() * Math.PI * 2;
    const distance = 70 + Math.random() * 40; // px from center
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    
    accEl.style.left = `calc(50% + ${x}px)`;
    accEl.style.top = `calc(50% + ${y}px)`;
    accEl.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 40 - 20}deg)`;
    
    document.getElementById('monster-container').appendChild(accEl);
    
    // Play a special sound!
    playTone(900, 'sine', 0.15);
}

function shrinkMonster() {
    // Shrinking is now minimal, mostly a shake/hurt animation
    monsterScale = Math.max(0.8, monsterScale - 0.1);
    updateMonster();
    monsterEl.classList.add('sad');
    setTimeout(() => monsterEl.classList.remove('sad'), 500);
}

function killMonster() {
    monsterEl.classList.add('dead');
}

function resetMonster() {
    monsterScale = 1.0;
    earnedAccessories = []; // Clear accessories
    monsterEl.classList.remove('dead', 'happy', 'sad');
    
    // Hide all body parts
    document.querySelectorAll('.part-visible').forEach(el => el.classList.remove('part-visible'));
    
    // Remove all accessories
    document.querySelectorAll('.accessory').forEach(el => el.remove());
    
    updateMonster();
}

function setGameSpeed() {
    let speedDrop = Math.floor(streak / 5) * 500;
    maxTime = Math.max(800, 10000 - speedDrop); 
}

// Game Logic
function startGame() {
    currentState = GAME_STATE.PLAYING;
    streak = 0;
    maxTime = 10000;
    upcomingQueue = [];
    wordLives = {}; // Reset tracking
    
    resetMonster();
    updateHUD();
    
    startScreen.classList.add('hidden');
    gameOverScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    
    nextRound();
}

function nextRound() {
    if (currentState !== GAME_STATE.PLAYING) return;
    
    isProcessing = false;
    setGameSpeed();
    
    // Determine Target Word
    let target;
    if (upcomingQueue.length > 0) {
        target = upcomingQueue.shift();
    } else {
        target = chumashWords[Math.floor(Math.random() * chumashWords.length)];
    }
    
    currentCorrectWord = target;
    
    // Check if word is mastered
    if (!masteredWords.has(target.hebrew) && target.emoji) {
        showTeachingPhase(target);
        return; // Wait for teaching phase to complete
    }
    
    renderRound();
}

function showTeachingPhase(word) {
    isProcessing = true;
    
    // Update UI
    teachHebrewEl.innerText = word.hebrew;
    teachEnglishEl.innerText = word.english;
    teachingGrid.innerHTML = '';
    audioHint.classList.add('hidden');
    startRoundBtn.classList.add('hidden');
    
    // Choose 3 unique random decoy emojis
    const distractors = Array.from(new Set(
        chumashWords
            .filter(w => w.emoji && w.emoji !== word.emoji)
            .map(w => w.emoji)
    ))
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
    
    const choices = [word.emoji, ...distractors].sort(() => 0.5 - Math.random());
    
    choices.forEach(emoji => {
        const btn = document.createElement('button');
        btn.className = 'emoji-btn';
        btn.innerText = emoji;
        
        btn.onclick = () => {
            if (emoji === word.emoji) {
                // Correct!
                btn.classList.add('correct-emoji');
                // Disable all buttons
                document.querySelectorAll('.emoji-btn').forEach(b => b.style.pointerEvents = 'none');
                
                // Pronounce
                speakHebrew(word.hebrew);
                
                // Show hint and play button
                audioHint.classList.remove('hidden');
                startRoundBtn.classList.remove('hidden');
                
                // Mark as mastered for this session
                masteredWords.add(word.hebrew);
                localStorage.setItem('whackWordMastered', JSON.stringify(Array.from(masteredWords)));
            } else {
                // Wrong
                btn.classList.add('wrong-emoji');
                playTone(200, 'square', 0.2);
            }
        };
        teachingGrid.appendChild(btn);
    });
    
    teachingModal.classList.remove('hidden');
}

function renderRound() {
    const target = currentCorrectWord;
    
    // Pick distractors including target
    const roundWords = getRandomWords(4, target); 
    
    // Render
    targetWordEl.innerText = target.english;
    gridContainer.innerHTML = '';
    
    roundWords.forEach(word => {
        const btn = document.createElement('div');
        btn.className = 'word-card pop-in';
        const span = document.createElement('span');
        span.innerText = word.hebrew;
        btn.appendChild(span);
        
        btn.onclick = () => handleGuess(word, btn);
        gridContainer.appendChild(btn);
    });
    
    // Reset Timer
    startTimer();
}

function startTimer() {
    if (timer) clearInterval(timer);
    
    let startTime = Date.now();
    let endTime = startTime + maxTime;
    
    // Reset state instantly
    timerBar.style.width = '100%';
    // Reset to original gradient
    timerBar.style.background = 'linear-gradient(90deg, #F72585, #4CC9F0)'; 
    
    timer = setInterval(() => {
        if (currentState !== GAME_STATE.PLAYING || isProcessing) return;
        
        let now = Date.now();
        let remaining = endTime - now;
        let pct = (remaining / maxTime) * 100;
        
        // Critical time warning (red)
        if (pct <= 30) {
            timerBar.style.background = '#EF476F'; // Overrides the gradient
        }
        
        timerBar.style.width = `${Math.max(0, pct)}%`;
        
        if (remaining <= 0) {
            clearInterval(timer);
            handleTimeOut();
        }
    }, 16);
}

function handleTimeOut() {
   if (isProcessing) return;
   
   // Treat as wrong answer
   handleWrongAnswer(currentCorrectWord, null);
}

function handleGuess(word, btnElement) {
    if (isProcessing || currentState !== GAME_STATE.PLAYING) return;
    isProcessing = true;
    clearInterval(timer);
    
    if (word.hebrew === currentCorrectWord.hebrew) {
        // Correct
        handleCorrectAnswer(btnElement);
    } else {
        // Wrong
        handleWrongAnswer(currentCorrectWord, btnElement);
    }
}

function handleCorrectAnswer(btnElement) {
    streak++;
    if (streak > bestStreak) {
        bestStreak = streak;
        localStorage.setItem('whackWordBest', bestStreak);
    }
    
    if (btnElement) btnElement.classList.add('correct');
    
    playTone(600, 'sine', 0.1); 
    setTimeout(() => playTone(800, 'sine', 0.2), 100);
    
    growMonster();
    
    feedbackEl.innerText = "Good!";
    feedbackEl.style.color = "#06D6A0";
    feedbackEl.style.opacity = 1;
    
    updateHUD();
    
    setTimeout(() => {
        feedbackEl.style.opacity = 0;
        nextRound();
    }, 800);
}

function handleWrongAnswer(correctWord, btnElement) {
    if (btnElement) btnElement.classList.add('wrong');
    playTone(200, 'sawtooth', 0.4);
    
    // Tracking Lives
    const key = correctWord.hebrew;
    if (!wordLives[key]) wordLives[key] = 0;
    wordLives[key]++;
    
    shrinkMonster();
    
    // Visual Correctness
    Array.from(gridContainer.children).forEach(child => {
        if (child.innerText === correctWord.hebrew) {
            child.classList.add('correct');
        }
    });

    // Check Death
    if (monsterScale < 0.5 || wordLives[key] >= 3) {
        killMonster();
        setTimeout(() => {
            gameOver("Monster Died!");
        }, 1200);
        return;
    }

    // Show Mnemonic Modal logic
    setTimeout(() => {
        showFeedbackModal(correctWord);
    }, 1000);
}

function showFeedbackModal(word) {
    // Determine Mnemonic
    const trick = word.mnemonic || "Say it out loud: " + word.english + " ... " + word.hebrew;
    mnemonicTextEl.innerHTML = trick;
    
    feedbackModal.classList.remove('hidden');
    
    // Queue Logic: Add back to queue in 2 turns
    // If we just failed 'Av', we want to see it again soon.
    upcomingQueue.push(getRandomWords(1)[0]); // Random buffer
    upcomingQueue.push(getRandomWords(1)[0]); // Random buffer
    upcomingQueue.push(word); // The failed word again
    
    console.log("Queued word to return:", word.english);
}

startRoundBtn.onclick = () => {
    isProcessing = false;
    teachingModal.classList.add('hidden');
    renderRound();
};

resumeBtn.onclick = () => {
    feedbackModal.classList.add('hidden');
    nextRound();
};

function gameOver(reason) {
    currentState = GAME_STATE.GAME_OVER;
    finalScoreEl.innerText = streak;
    finalBestEl.innerText = bestStreak;
    
    setTimeout(() => {
        gameScreen.classList.add('hidden');
        gameOverScreen.classList.remove('hidden');
    }, 500);
}

// Event Listeners
document.getElementById('start-btn').onclick = startGame;
document.getElementById('restart-btn').onclick = startGame;
resumeBtn.onclick = resumeFromModal;

// Init
bestStreakEl.innerText = bestStreak;
