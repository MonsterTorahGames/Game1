const chumashWords = [
  {
    "english": "(a) man",
    "hebrew": "אִישׁ",
    "mnemonic": "Every **Ish** (issue) needs a **man** to solve it."
  },
  {
    "english": "(a) woman/wife",
    "hebrew": "אִשָׁה",
    "mnemonic": "**I sha**ll always serve my **wife**."
  },
  {
    "english": "(a) father",
    "hebrew": "אָב",
    "mnemonic": "My **Av**atar looks just like my **father**."
  },
  {
    "english": "(a) mother",
    "hebrew": "אֵם",
    "mnemonic": "My **mother** loves **M**&Ms."
  },
  {
    "english": "(a) son",
    "hebrew": "בֵּן",
    "mnemonic": "My **son**'s name is **Ben**."
  },
  {
    "english": "(a) daughter",
    "hebrew": "בַּת",
    "mnemonic": "My **daughter** plays with a baseball **bat**."
  },
  {
    "english": "(a) brother",
    "hebrew": "אָח",
    "mnemonic": "My **brother** has an **Ach** (ache) in his stomach."
  },
  {
    "english": "he said",
    "hebrew": "אָמַר",
    "mnemonic": "**A mar**ine **said** Semper Fi."
  },
  {
    "english": "he went",
    "hebrew": "הָלַך",
    "mnemonic": "I **Ha-lach** (have luck) wherever **he went**."
  },
  {
    "english": "to",
    "hebrew": "אֶל",
    "mnemonic": "Take the **El**evator **to** the top."
  },
  {
    "english": "all  / every / any",
    "hebrew": "כָּל"
  },
  {
    "english": "Also",
    "hebrew": "גַם"
  },
  {
    "english": "(a) King",
    "hebrew": "מֶלֶך"
  },
  {
    "english": "(a) Queen",
    "hebrew": "מַלְכָּה"
  },
  {
    "english": "(a) commandment",
    "hebrew": "מִצְוָה"
  },
  {
    "english": "he sent",
    "hebrew": "שָׁלַח"
  },
  {
    "english": "He took",
    "hebrew": "לָקַח"
  },
  {
    "english": "He gave / He put",
    "hebrew": "נָתַן"
  },
  {
    "english": "He did / He made",
    "hebrew": "עָשָׂה"
  },
  {
    "english": "He loved",
    "hebrew": "אָהַב"
  },
  {
    "english": "He called / He  read",
    "hebrew": "קָרָא"
  },
  {
    "english": "on",
    "hebrew": "עַל"
  },
  {
    "english": "with",
    "hebrew": "עִם"
  },
  {
    "english": "before/ in front of",
    "hebrew": "לִפְנֵי"
  },
  {
    "english": "after / behind",
    "hebrew": "אַחֲרֵי\\ אַחַר"
  },
  {
    "english": "from",
    "hebrew": "מִן"
  },
  {
    "english": "that",
    "hebrew": "אֲשֶׁר"
  },
  {
    "english": "he saw",
    "hebrew": "רָאָה"
  },
  {
    "english": "he spoke",
    "hebrew": "דִבֵּר"
  },
  {
    "english": "he went out",
    "hebrew": "יָצָא"
  },
  {
    "english": "land",
    "hebrew": "אֶרֶץ"
  },
  {
    "english": "(a) house",
    "hebrew": "בַּיִת"
  },
  {
    "english": "to / for",
    "hebrew": "ל....."
  },
  {
    "english": "in / with",
    "hebrew": "ב....."
  },
  {
    "english": "from",
    "hebrew": "מ....."
  },
  {
    "english": "like",
    "hebrew": "כ....."
  },
  {
    "english": "that",
    "hebrew": "שׁ...."
  },
  {
    "english": "(an) ear",
    "hebrew": "אוֹזֶן"
  },
  {
    "english": "(an) eye",
    "hebrew": "עַיִן"
  },
  {
    "english": "(a) heart",
    "hebrew": "לֵב (לֵבָב)"
  },
  {
    "english": "(a) head / top",
    "hebrew": "רֹֹאשׁ"
  },
  {
    "english": "(a) foot",
    "hebrew": "רֶגֶל"
  },
  {
    "english": "(a) hand",
    "hebrew": "יָד"
  },
  {
    "english": "(a) mountain",
    "hebrew": "הַר"
  },
  {
    "english": "Torah",
    "hebrew": "תּוֹרָה"
  },
  {
    "english": "(a) nation",
    "hebrew": "עַם"
  },
  {
    "english": "(a) boy / lad",
    "hebrew": "יֶלֶד"
  },
  {
    "english": "he opened",
    "hebrew": "פָּתַח"
  },
  {
    "english": "he found",
    "hebrew": "מָצָא"
  },
  {
    "english": "he stood",
    "hebrew": "עָמַד"
  },
  {
    "english": "he was",
    "hebrew": "הָיָה"
  },
  {
    "english": "he ate",
    "hebrew": "אָכַל"
  },
  {
    "english": "he guarded / He watched",
    "hebrew": "שָׁמַר"
  },
  {
    "english": "He went up",
    "hebrew": "עָָלָה"
  },
  {
    "english": "he lifted up /he carried",
    "hebrew": "נָשָׂא"
  },
  {
    "english": "He heard / He listened",
    "hebrew": "שָׁמַע"
  },
  {
    "english": "he commanded",
    "hebrew": "צִוָה"
  },
  {
    "english": "he fell",
    "hebrew": "נָפַל"
  },
  {
    "english": "he slaughtered",
    "hebrew": "זָבַח"
  },
  {
    "english": "he washed",
    "hebrew": "רָחַץ"
  },
  {
    "english": "he got up / arose",
    "hebrew": "קָם (קוּם)"
  },
  {
    "english": "he came",
    "hebrew": "בָּא (בּוֹא)"
  },
  {
    "english": "he died",
    "hebrew": "מֵת (מוּת)"
  },
  {
    "english": "he came close",
    "hebrew": "קָרַב"
  },
  {
    "english": "That/ Because/ When",
    "hebrew": "כִּי"
  },
  {
    "english": "he put / placed",
    "hebrew": "שָׂם (שִׂים)"
  },
  {
    "english": "he returned",
    "hebrew": "שָׁב (שׁוּב)"
  },
  {
    "english": "(a) fire",
    "hebrew": "אֵשׁ"
  },
  {
    "english": "(a) desert",
    "hebrew": "מִדְבָּר"
  },
  {
    "english": "(a) voice /sound",
    "hebrew": "קוֹל"
  },
  {
    "english": "he knew",
    "hebrew": "יָדַע"
  },
  {
    "english": "(a) camel",
    "hebrew": "גָמָל"
  },
  {
    "english": "Water",
    "hebrew": "מַיִם"
  },
  {
    "english": "blood",
    "hebrew": "דָם"
  },
  {
    "english": "(an) ox",
    "hebrew": "שׁוֹר"
  },
  {
    "english": "day",
    "hebrew": "יוֹם"
  },
  {
    "english": "night",
    "hebrew": "לַיְלָה"
  },
  {
    "english": "(a) face/  (Front)",
    "hebrew": "פָּנִים"
  },
  {
    "english": "(a) famine",
    "hebrew": "רָעָב"
  },
  {
    "english": "as / when /while/ like",
    "hebrew": "כַּאֲשֶׁר"
  },
  {
    "english": "(Not translated. It acts like a pointer.)",
    "hebrew": "(Rule 1)"
  },
  {
    "english": "With",
    "hebrew": "(Rule 2)"
  },
  {
    "english": "big",
    "hebrew": "גָדוֹל"
  },
  {
    "english": "Holy",
    "hebrew": "קָדוֹשׁ"
  },
  {
    "english": "(a) sister",
    "hebrew": "אָחוֹת"
  },
  {
    "english": "mouth",
    "hebrew": "פֶּה"
  },
  {
    "english": "one",
    "hebrew": "אֶחָד"
  },
  {
    "english": "evil",
    "hebrew": "רָע"
  },
  {
    "english": "good",
    "hebrew": "טוֹב"
  },
  {
    "english": "meat",
    "hebrew": "בָּשָׂר"
  },
  {
    "english": "if",
    "hebrew": "אִם"
  },
  {
    "english": "(a) word / thing / matter",
    "hebrew": "דָּבָר"
  },
  {
    "english": "this (m)",
    "hebrew": "זֶה"
  },
  {
    "english": "this (f)",
    "hebrew": "זֹאת"
  },
  {
    "english": "these",
    "hebrew": "אֵלֶּה"
  },
  {
    "english": "That (m)",
    "hebrew": "הַהוּא"
  },
  {
    "english": "That (f)",
    "hebrew": "הַהִיא"
  },
  {
    "english": "those (m)",
    "hebrew": "הָהֵם"
  },
  {
    "english": "those (f)",
    "hebrew": "הָהֵן"
  },
  {
    "english": "no",
    "hebrew": "לֹא"
  },
  {
    "english": "don’t",
    "hebrew": "אַל"
  },
  {
    "english": "He sat",
    "hebrew": "יָשַׁב"
  },
  {
    "english": "He chased/ He pursued",
    "hebrew": "רָדַף"
  },
  {
    "english": "He approached",
    "hebrew": "נָגַש"
  },
  {
    "english": "For the sake of/ in order to",
    "hebrew": "לְמַעַן"
  },
  {
    "english": "Flock of sheep",
    "hebrew": "צֹאן"
  },
  {
    "english": "soul",
    "hebrew": "נֶפֶשׁ"
  },
  {
    "english": "tent",
    "hebrew": "אֹהֶל"
  },
  {
    "english": "name",
    "hebrew": "שֵׁם"
  },
  {
    "english": "Now",
    "hebrew": "עַתָּה"
  },
  {
    "english": "Please/ now",
    "hebrew": "נָא"
  },
  {
    "english": "He rested",
    "hebrew": "שָׁבַת"
  },
  {
    "english": "He cut",
    "hebrew": "כָּרַת"
  },
  {
    "english": "He cried",
    "hebrew": "בָּכָה"
  },
  {
    "english": "He built",
    "hebrew": "בָּנָה"
  },
  {
    "english": "He went down",
    "hebrew": "יָרַד"
  },
  {
    "english": "He answered",
    "hebrew": "עָנָה"
  },
  {
    "english": "Covenant",
    "hebrew": "בְּרִית"
  },
  {
    "english": "year",
    "hebrew": "שָׁנָה"
  },
  {
    "english": "On the word of/ command of",
    "hebrew": "עַל פִּי"
  },
  {
    "english": "Men",
    "hebrew": "אַנָשִׁים"
  },
  {
    "english": "Woman/ Wives",
    "hebrew": "נָשִׁים"
  },
  {
    "english": "World",
    "hebrew": "עוֹלָם"
  },
  {
    "english": "Bread",
    "hebrew": "לֶחֶם"
  },
  {
    "english": "Until",
    "hebrew": "עַד"
  },
  {
    "english": "He blessed",
    "hebrew": "בֵּרֵךְ"
  },
  {
    "english": "He killed",
    "hebrew": "הָרַג"
  },
  {
    "english": "(a) congregation",
    "hebrew": "קָהָל"
  },
  {
    "english": "(a) blessing",
    "hebrew": "בְּרָכָה"
  },
  {
    "english": "(a) seed",
    "hebrew": "זֶרַע"
  },
  {
    "english": "(a) place",
    "hebrew": "מָקוֹם"
  },
  {
    "english": "Like",
    "hebrew": "כְּמוֹ"
  },
  {
    "english": "Behold",
    "hebrew": "הִנֵה"
  },
  {
    "english": "What (did)",
    "hebrew": "מֶה/ מָה"
  },
  {
    "english": "Why (do/ did)",
    "hebrew": "לָמָה"
  },
  {
    "english": "fear",
    "hebrew": "יִרְאָה"
  },
  {
    "english": "There",
    "hebrew": "שָׁם"
  },
  {
    "english": "He dreamed",
    "hebrew": "חָלַם"
  },
  {
    "english": "He chose",
    "hebrew": "בָּחַר"
  },
  {
    "english": "(a) courtyard",
    "hebrew": "חָצֵר"
  },
  {
    "english": "(a) cow",
    "hebrew": "פָּרָה"
  },
  {
    "english": "I",
    "hebrew": "אַנִי/ אָנוֹכִי"
  },
  {
    "english": "You (m, s)",
    "hebrew": "אַתָּה"
  },
  {
    "english": "You (f, s)",
    "hebrew": "אַתְּ"
  },
  {
    "english": "He",
    "hebrew": "הוּא"
  },
  {
    "english": "She",
    "hebrew": "הִיא"
  },
  {
    "english": "We",
    "hebrew": "אָנוּ/ אַנַחְנוּ"
  },
  {
    "english": "You (m, pl)",
    "hebrew": "אַתֶּם"
  },
  {
    "english": "You (f, pl)",
    "hebrew": "אַתֶּן"
  },
  {
    "english": "They (m)",
    "hebrew": "הֵם"
  },
  {
    "english": "They (f)",
    "hebrew": "הֵן"
  },
  {
    "english": "There is",
    "hebrew": "יֵשׁ"
  },
  {
    "english": "There is not",
    "hebrew": "אֵין"
  },
  {
    "english": "(a) gate",
    "hebrew": "שַׁעַר"
  },
  {
    "english": "Pure",
    "hebrew": "טָהוֹר"
  },
  {
    "english": "Impure",
    "hebrew": "טָמֵא"
  },
  {
    "english": "Silver/ Money",
    "hebrew": "כֶּסֶף"
  },
  {
    "english": "He hated",
    "hebrew": "שָׂנֵא"
  },
  {
    "english": "He traveled",
    "hebrew": "נָסַע"
  },
  {
    "english": "He bore children",
    "hebrew": "יָלַד"
  },
  {
    "english": "He revealed",
    "hebrew": "גָלָה"
  },
  {
    "english": "(a) man / (The first man)",
    "hebrew": "אָדָם"
  },
  {
    "english": "He counted",
    "hebrew": "סָפַר"
  },
  {
    "english": "(a) number",
    "hebrew": "מִסְפָּר"
  },
  {
    "english": "He judged",
    "hebrew": "שָׁפַט"
  },
  {
    "english": "(a) judgment",
    "hebrew": "מִשְׁפָט"
  },
  {
    "english": "Other",
    "hebrew": "אַחֵר"
  },
  {
    "english": "(an) angel/ messenger",
    "hebrew": "מַלְאָךְ"
  },
  {
    "english": "He cleared",
    "hebrew": "פִּנָה"
  },
  {
    "english": "He wrote",
    "hebrew": "כָּתַב"
  },
  {
    "english": "He sold",
    "hebrew": "מָכַר"
  },
  {
    "english": "He asked/ He borrowed",
    "hebrew": "שָׁאַל"
  },
  {
    "english": "A tree/ wood",
    "hebrew": "עֵץ"
  },
  {
    "english": "(a) lip / language",
    "hebrew": "שָׂפָה"
  },
  {
    "english": "Outside",
    "hebrew": "חוּץ"
  },
  {
    "english": "(a) spring / well",
    "hebrew": "עַיִן"
  },
  {
    "english": "Thus/ like this",
    "hebrew": "כֹּה"
  },
  {
    "english": "Very much / a lot / a lot of money (possessions)",
    "hebrew": "מְאֹד"
  },
  {
    "english": "(a) way",
    "hebrew": "דֶרֶך"
  },
  {
    "english": "(a) sign",
    "hebrew": "אוֹת"
  },
  {
    "english": "(a) field",
    "hebrew": "שָׁדֶה"
  },
  {
    "english": "He feared",
    "hebrew": "יָרֵא"
  },
  {
    "english": "He hit",
    "hebrew": "נִכָה"
  },
  {
    "english": "He covered",
    "hebrew": "כִּסָה"
  },
  {
    "english": "He passed",
    "hebrew": "עָבַר"
  },
  {
    "english": "He tore",
    "hebrew": "קָרַע"
  },
  {
    "english": "(an) owner/ master",
    "hebrew": "בַּעַל"
  },
  {
    "english": "(a) dream",
    "hebrew": "חֲלוֹם"
  },
  {
    "english": "(a) wild animal",
    "hebrew": "חַיָּה"
  },
  {
    "english": "empty",
    "hebrew": "רֵק"
  },
  {
    "english": "He saved",
    "hebrew": "נִצָל"
  },
  {
    "english": "(a) garment",
    "hebrew": "בֶּגֶד"
  },
  {
    "english": "Evening",
    "hebrew": "עֶרֶב"
  },
  {
    "english": "Morning",
    "hebrew": "בֹּקֶר"
  },
  {
    "english": "Month",
    "hebrew": "חֹדֶש"
  },
  {
    "english": "Underneath/ instead of",
    "hebrew": "תַּחַת"
  },
  {
    "english": "Shabbos",
    "hebrew": "שַבָּת"
  },
  {
    "english": "Life",
    "hebrew": "חַיִים"
  },
  {
    "english": "Sky / Heaven",
    "hebrew": "שָׁמַיִם"
  },
  {
    "english": "He sanctified (made Holy)",
    "hebrew": "קִדֵשׁ"
  },
  {
    "english": "He finished/  he destroyed",
    "hebrew": "כִּלָה"
  },
  {
    "english": "He lived",
    "hebrew": "חָיָה"
  },
  {
    "english": "Wine",
    "hebrew": "יַיִן"
  },
  {
    "english": "(an) ark/ box",
    "hebrew": "תֵּּּבָה"
  },
  {
    "english": "(an) army/ host",
    "hebrew": "צָבָא"
  },
  {
    "english": "Therefore",
    "hebrew": "עַל כֵּן"
  },
  {
    "english": "Ox",
    "hebrew": "פָּר"
  },
  {
    "english": "Ram",
    "hebrew": "אַיִל"
  },
  {
    "english": "Male sheep",
    "hebrew": "כֶּבֶש"
  },
  {
    "english": "Burnt offering",
    "hebrew": "עֹלָה"
  },
  {
    "english": "So/ yes",
    "hebrew": "כֵּן"
  },
  {
    "english": "(a) Cohen",
    "hebrew": "כֹּהֵן"
  },
  {
    "english": "or",
    "hebrew": "אוֹ"
  },
  {
    "english": "Alter",
    "hebrew": "מִזְבֵַחַ"
  },
  {
    "english": "(a) family",
    "hebrew": "מִשְׁפָּחָה"
  },
  {
    "english": "(a) servant",
    "hebrew": "עֶבֶד"
  },
  {
    "english": "Between",
    "hebrew": "בֵּין"
  },
  {
    "english": "Gold",
    "hebrew": "זָהָב"
  },
  {
    "english": "(a) sin/ (a) sin offering",
    "hebrew": "חַטָאת"
  },
  {
    "english": "(a) staff/ rod/ stick",
    "hebrew": "מַטֶה"
  },
  {
    "english": "One",
    "hebrew": "אֶחָד"
  },
  {
    "english": "Two",
    "hebrew": "שְנַיִם"
  },
  {
    "english": "Three",
    "hebrew": "שְלֹשָׁה"
  },
  {
    "english": "Four",
    "hebrew": "אַרְבָעָה"
  },
  {
    "english": "Five",
    "hebrew": "חַמִשָׁה"
  },
  {
    "english": "Six",
    "hebrew": "שִׁשָׁה"
  },
  {
    "english": "Seven",
    "hebrew": "שִׁבְעָה"
  },
  {
    "english": "Eight",
    "hebrew": "שְׁמֹנֶה"
  },
  {
    "english": "Nine",
    "hebrew": "תִּשְׁעָה"
  },
  {
    "english": "Ten",
    "hebrew": "עַשָׂרָה"
  },
  {
    "english": "Two",
    "hebrew": "עֶשְׂרִים"
  },
  {
    "english": "Thirty",
    "hebrew": "שְׁלוֹשִׁים"
  },
  {
    "english": "Forty",
    "hebrew": "אַרְבָּעִים"
  },
  {
    "english": "Fifty",
    "hebrew": "חֲמִשִּׁים"
  },
  {
    "english": "Sixty",
    "hebrew": "שִׁשִּׁים"
  },
  {
    "english": "Seventy",
    "hebrew": "שִׁבְעִים"
  },
  {
    "english": "Eighty",
    "hebrew": "שְׁמֹנִים"
  },
  {
    "english": "Ninety",
    "hebrew": "תִּשְׁעִים"
  },
  {
    "english": "One hundred",
    "hebrew": "מֵאָה"
  },
  {
    "english": "One thousand",
    "hebrew": "אֶלֶף"
  },
  {
    "english": "First",
    "hebrew": "רִאשׁוֹן"
  },
  {
    "english": "Second",
    "hebrew": "שֵׁנִי"
  },
  {
    "english": "Third",
    "hebrew": "שְׁלִישִׁי"
  },
  {
    "english": "Forth",
    "hebrew": "רְבִיעִי"
  },
  {
    "english": "Fifth",
    "hebrew": "חֲמִישִׁי"
  },
  {
    "english": "Sixth",
    "hebrew": "שִׁשִּׁי"
  },
  {
    "english": "Seventh",
    "hebrew": "שְׁבִיעִי"
  },
  {
    "english": "Eighth",
    "hebrew": "שְׁמִינִי"
  },
  {
    "english": "Ninth",
    "hebrew": "תְּשִׁיעִי"
  },
  {
    "english": "Tenth",
    "hebrew": "עֲשִׂירִי"
  }
];
