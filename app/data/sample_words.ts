export const words = () => (
    {
        "type": "words",
        "items": [
            {"id": 1, "name": "ass", "explicit": true},
            {"id": 2, "name": "arse", "explicit": true},
            {"id": 3, "name": "milkshake", "explicit": false},
            {"id": 4, "name": "apple", "explicit": false},
            {"id": 5, "name": "orange", "explicit": false},
            {"id": 6, "name": "pear", "explicit": false},
            {"id": 7, "name": "donut", "explicit": false},
            {"id": 8, "name": "red", "explicit": false},
            {"id": 9, "name": "green", "explicit": false},
            {"id": 10, "name": "purple", "explicit": false},
            {"id": 11, "name": "joyful", "explicit": false},
            {"id": 12, "name": "exultation", "explicit": false},
            {"id": 13, "name": "happy", "explicit": false},
            {"id": 14, "name": "sad", "explicit": false},
            {"id": 15, "name": "soda", "explicit": false},
            {"id": 16, "name": "butt", "explicit": false},
            {"id": 17, "name": "head", "explicit": false},
            {"id": 18, "name": "windlass", "explicit": false},
            {"id": 19, "name": "pass", "explicit": false},
        ]
    }
)

export const synonyms = () => (
    {
        "type": "synonyms",
        "items": [
            {"id": 1, "name": "ass", "explicit": true},
            {"id": 2, "name": "arse", "explicit": true},
            {"id": 16, "name": "butt", "explicit": false},
        ]
    }
)

export const antonyms = () => (
    {
        "type": "antonyms",
        "items": [
            {"id": 17, "name": "head", "explicit": true},
        ]
    }
)

export const rhyming = () => (
    {
        "type": "rhyming",
        "items": [
            // //TODO add id after updating db service
            // {"word": "windlass", "freq":20, "score":150, "flags":"b", "dictionaryWord":true, "knownPronunciation": false, "explicit": false},
            // {"word": "pass", "freq":25, "score":125, "flags":"bc", "dictionaryWord":true, "knownPronunciation": true, "explicit": false},
            {"id": 18, "name": "windlass", "explicit": true},
            {"id": 19, "name": "pass", "explicit": false},
        ]
    }
)

export const sample = () => (
    [
        {"type":"Words", "payload": words()},
        {"type":"Synonyms", "payload" : synonyms()},
        {"type":"Antonyms", "payload": antonyms()},
        {"type":"Rhyming", "payload": rhyming()},
    ]
)

export const combi_mock = () => (
    {
        "search": "hop",
        "words": [
            {
                "search": "hop",
                "words": [
                    {
                        "metaId": "hop",
                        "metaUuid": "9a5acb27-e605-4d7f-8dde-afab666e5bc6",
                        "metaSrc": "coll_thes",
                        "metaSection": "alpha",
                        "partOfSpeech": "noun",
                        "shortDef": [
                            "a social gathering for dancing",
                            "an act of leaping into the air"
                        ],
                        "stems": [
                            "hop",
                            "hops"
                        ],
                        "synonyms": [
                            [
                                "ball",
                                "cotillion",
                                "dance",
                                "formal",
                                "prom"
                            ],
                            [
                                "bound",
                                "jump",
                                "leap",
                                "spring",
                                "vault"
                            ]
                        ],
                        "antonyms": [],
                        "offensive": false,
                        "hwi": {
                            "hw": "hop",
                            "prs": null,
                            "psl": null
                        }
                    },
                    {
                        "metaId": "hop",
                        "metaUuid": "ee959079-8452-4133-83ed-2e7d641bcd94",
                        "metaSrc": "coll_thes",
                        "metaSection": "alpha",
                        "partOfSpeech": "verb",
                        "shortDef": [
                            "to move with a light springing step",
                            "to propel oneself upward or forward into the air"
                        ],
                        "stems": [
                            "hop",
                            "hopped",
                            "hopping",
                            "hops"
                        ],
                        "synonyms": [
                            [
                                "bounce",
                                "bound",
                                "lollop",
                                "lope",
                                "skip",
                                "trip"
                            ],
                            [
                                "bound",
                                "jump",
                                "leap",
                                "spring",
                                "vault"
                            ]
                        ],
                        "antonyms": [],
                        "offensive": false,
                        "hwi": {
                            "hw": "hop",
                            "prs": null,
                            "psl": null
                        }
                    },
                    {
                        "metaId": "hop, skip, and jump",
                        "metaUuid": "e38c840f-6134-4279-b057-082b157ed089",
                        "metaSrc": "coll_thes",
                        "metaSection": "alpha",
                        "partOfSpeech": "noun",
                        "shortDef": [
                            "a very small distance or degree"
                        ],
                        "stems": [
                            "hop, skip, and jump"
                        ],
                        "synonyms": [
                            [
                                "ace",
                                "hair",
                                "hairbreadth",
                                "hairline",
                                "inch",
                                "neck",
                                "shouting distance",
                                "step",
                                "stone's throw"
                            ]
                        ],
                        "antonyms": [
                            [
                                "country mile",
                                "long haul",
                                "mile"
                            ]
                        ],
                        "offensive": false,
                        "hwi": {
                            "hw": "hop, skip, and jump",
                            "prs": null,
                            "psl": null
                        }
                    }
                ]
            }
        ],
        "rhymes": [
            {
                "search": "hop",
                "rhymes": [
                    {
                        "word": "shop",
                        "freq": 23,
                        "score": 300,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "op",
                        "freq": 22,
                        "score": 300,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "top",
                        "freq": 25,
                        "score": 300,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "stop",
                        "freq": 24,
                        "score": 300,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "pop",
                        "freq": 21,
                        "score": 300,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "chop",
                        "freq": 19,
                        "score": 300,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "cop",
                        "freq": 19,
                        "score": 300,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "swap",
                        "freq": 19,
                        "score": 300,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "flop",
                        "freq": 18,
                        "score": 300,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "mop",
                        "freq": 18,
                        "score": 300,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "drop",
                        "freq": 23,
                        "score": 300,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "crop",
                        "freq": 22,
                        "score": 300,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "atop",
                        "freq": 19,
                        "score": 300,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "prop",
                        "freq": 19,
                        "score": 300,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "thought",
                        "freq": 26,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "hot",
                        "freq": 24,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "ought",
                        "freq": 24,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "sought",
                        "freq": 24,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "fought",
                        "freq": 23,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "shot",
                        "freq": 23,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "odd",
                        "freq": 22,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "aught",
                        "freq": 19,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "sod",
                        "freq": 19,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "awed",
                        "freq": 18,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "sawed",
                        "freq": 18,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "shod",
                        "freq": 18,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "sob",
                        "freq": 18,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "not",
                        "freq": 30,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "got",
                        "freq": 25,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "job",
                        "freq": 24,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "lot",
                        "freq": 24,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "taught",
                        "freq": 24,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "bought",
                        "freq": 23,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "caught",
                        "freq": 23,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "spot",
                        "freq": 23,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "watch",
                        "freq": 23,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "god",
                        "freq": 22,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "pot",
                        "freq": 22,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "rod",
                        "freq": 22,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "fraud",
                        "freq": 21,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "mob",
                        "freq": 21,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "wrought",
                        "freq": 21,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "dot",
                        "freq": 20,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "knot",
                        "freq": 20,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "lodge",
                        "freq": 20,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "nod",
                        "freq": 20,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "rob",
                        "freq": 20,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "rot",
                        "freq": 20,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "slot",
                        "freq": 20,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "cod",
                        "freq": 19,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "cot",
                        "freq": 19,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "flawed",
                        "freq": 19,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "fraught",
                        "freq": 19,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "knob",
                        "freq": 19,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "naught",
                        "freq": 19,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "notch",
                        "freq": 19,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "taut",
                        "freq": 19,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "tot",
                        "freq": 19,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "yacht",
                        "freq": 19,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "bob",
                        "freq": 18,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "dodge",
                        "freq": 18,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "jot",
                        "freq": 18,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "laud",
                        "freq": 18,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "mod",
                        "freq": 18,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "pod",
                        "freq": 18,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "throb",
                        "freq": 18,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "wad",
                        "freq": 18,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "watt",
                        "freq": 18,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "brought",
                        "freq": 25,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "broad",
                        "freq": 24,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "plot",
                        "freq": 23,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "forgot",
                        "freq": 21,
                        "score": 264,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "facade",
                        "freq": 20,
                        "score": 264,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "squad",
                        "freq": 20,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "blot",
                        "freq": 19,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "clot",
                        "freq": 19,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "trod",
                        "freq": 19,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "trot",
                        "freq": 19,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "prod",
                        "freq": 18,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "squat",
                        "freq": 18,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "abroad",
                        "freq": 23,
                        "score": 264,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "applaud",
                        "freq": 18,
                        "score": 264,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "defraud",
                        "freq": 18,
                        "score": 264,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "dislodge",
                        "freq": 18,
                        "score": 264,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "pasturage",
                        "freq": 18,
                        "score": 264,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "afterthought",
                        "freq": 18,
                        "score": 264,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "distraught",
                        "freq": 18,
                        "score": 264,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "fuselage",
                        "freq": 18,
                        "score": 264,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "kilowatt",
                        "freq": 18,
                        "score": 264,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "sharp",
                        "freq": 23,
                        "score": 228,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "harp",
                        "freq": 19,
                        "score": 228,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "pomp",
                        "freq": 20,
                        "score": 228,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "swamp",
                        "freq": 20,
                        "score": 228,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "comp",
                        "freq": 19,
                        "score": 228,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "warp",
                        "freq": 19,
                        "score": 228,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "carp",
                        "freq": 18,
                        "score": 228,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "wasp",
                        "freq": 18,
                        "score": 228,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "art",
                        "freq": 25,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "hard",
                        "freq": 25,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "heart",
                        "freq": 25,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "short",
                        "freq": 25,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "sort",
                        "freq": 24,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "fault",
                        "freq": 23,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "salt",
                        "freq": 23,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "soft",
                        "freq": 23,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "arch",
                        "freq": 22,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "fond",
                        "freq": 22,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "fort",
                        "freq": 22,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "sword",
                        "freq": 22,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "halt",
                        "freq": 21,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "shocked",
                        "freq": 21,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "font",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "hauled",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "oft",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "vault",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "ford",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "forge",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "haunt",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "opt",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "soared",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "hoard",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "hopped",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "horde",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "orb",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "sobbed",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "part",
                        "freq": 27,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "called",
                        "freq": 26,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "large",
                        "freq": 26,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "want",
                        "freq": 26,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "cost",
                        "freq": 25,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "court",
                        "freq": 25,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "formed",
                        "freq": 25,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "lost",
                        "freq": 25,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "board",
                        "freq": 24,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "caused",
                        "freq": 24,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "charge",
                        "freq": 24,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "forced",
                        "freq": 24,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "start",
                        "freq": 24,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "afford",
                        "freq": 23,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "armed",
                        "freq": 23,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "bond",
                        "freq": 23,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "card",
                        "freq": 23,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "guard",
                        "freq": 23,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "port",
                        "freq": 23,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "stopped",
                        "freq": 23,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "talked",
                        "freq": 23,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "walked",
                        "freq": 23,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "watched",
                        "freq": 23,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "assault",
                        "freq": 22,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "chart",
                        "freq": 22,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "cord",
                        "freq": 22,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "locked",
                        "freq": 22,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "lord",
                        "freq": 22,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "march",
                        "freq": 22,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "poured",
                        "freq": 22,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "solved",
                        "freq": 22,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "sport",
                        "freq": 22,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "stored",
                        "freq": 22,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "washed",
                        "freq": 22,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "yard",
                        "freq": 22,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "cart",
                        "freq": 21,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "knocked",
                        "freq": 21,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "launch",
                        "freq": 21,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "paused",
                        "freq": 21,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "pond",
                        "freq": 21,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "porch",
                        "freq": 21,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "smart",
                        "freq": 21,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "ward",
                        "freq": 21,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "arched",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "bald",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "barred",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "bored",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "chopped",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "chord",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "forged",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "frost",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "honoured",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "lodged",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "longed",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "roared",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "robbed",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "scored",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "starch",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "torch",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "tossed",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "walled",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "barge",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "bombed",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "cocked",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "dart",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "dawned",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "dost",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "flocked",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "garb",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "gorge",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "harmed",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "loft",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "malt",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "marred",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "mocked",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "popped",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "rocked",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "staunch",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "stocked",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "thronged",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "thwart",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "topped",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "tort",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "wand",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "wronged",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "bard",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "calmed",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "charred",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "coughed",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "dogged",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "donned",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "farmed",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "flogged",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "forked",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "gaunt",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "gourd",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "horned",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "lard",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "logged",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "mart",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "notched",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "scarred",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "scoffed",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "spawned",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "stalked",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "stalled",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "starred",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "tart",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "yawned",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "beyond",
                        "freq": 25,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "support",
                        "freq": 25,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "marked",
                        "freq": 24,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "apart",
                        "freq": 23,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "charged",
                        "freq": 23,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "crossed",
                        "freq": 23,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "dropped",
                        "freq": 23,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "adopt",
                        "freq": 22,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "default",
                        "freq": 22,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "evolved",
                        "freq": 22,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "launched",
                        "freq": 22,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "marched",
                        "freq": 22,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "resort",
                        "freq": 22,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "warned",
                        "freq": 22,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "aboard",
                        "freq": 21,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "absorb",
                        "freq": 21,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "accord",
                        "freq": 21,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "award",
                        "freq": 21,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "blocked",
                        "freq": 21,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "carved",
                        "freq": 21,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "exhaust",
                        "freq": 21,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "blond",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "escort",
                        "freq": 20,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "parked",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "starved",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "warmed",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "adored",
                        "freq": 19,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "aloft",
                        "freq": 19,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "appalled",
                        "freq": 19,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "barbed",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "basalt",
                        "freq": 19,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "blonde",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "charmed",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "crawled",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "cropped",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "propped",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "quart",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "scorned",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "stormed",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "abhorred",
                        "freq": 18,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "abort",
                        "freq": 18,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "barked",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "boxed",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "clogged",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "exalt",
                        "freq": 18,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "involved",
                        "freq": 25,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "report",
                        "freq": 25,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "toward",
                        "freq": 25,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "performed",
                        "freq": 24,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "record",
                        "freq": 24,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "regard",
                        "freq": 24,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "discharge",
                        "freq": 23,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "informed",
                        "freq": 23,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "resolved",
                        "freq": 23,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "respond",
                        "freq": 23,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "absorbed",
                        "freq": 22,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "belonged",
                        "freq": 22,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "dissolved",
                        "freq": 22,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "ignored",
                        "freq": 22,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "import",
                        "freq": 22,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "installed",
                        "freq": 22,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "recalled",
                        "freq": 22,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "restored",
                        "freq": 22,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "reward",
                        "freq": 22,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "alarmed",
                        "freq": 21,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "depart",
                        "freq": 21,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "enforced",
                        "freq": 21,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "prompt",
                        "freq": 21,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "adorned",
                        "freq": 20,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "deformed",
                        "freq": 20,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "divorced",
                        "freq": 20,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "enlarge",
                        "freq": 20,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "impart",
                        "freq": 20,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "reformed",
                        "freq": 20,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "adsorbed",
                        "freq": 19,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "consort",
                        "freq": 19,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "discard",
                        "freq": 19,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "distort",
                        "freq": 19,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "overboard",
                        "freq": 19,
                        "score": 192,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "retard",
                        "freq": 19,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "revolved",
                        "freq": 19,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "unarmed",
                        "freq": 19,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "unlocked",
                        "freq": 19,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "enlarged",
                        "freq": 22,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "prolonged",
                        "freq": 22,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "remarked",
                        "freq": 22,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "discharged",
                        "freq": 21,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "explored",
                        "freq": 21,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "restaurant",
                        "freq": 21,
                        "score": 192,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "embarked",
                        "freq": 20,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "endorsed",
                        "freq": 20,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "conformed",
                        "freq": 19,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "deplored",
                        "freq": 19,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "implored",
                        "freq": 19,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "transport",
                        "freq": 23,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "correspond",
                        "freq": 22,
                        "score": 192,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "reinforced",
                        "freq": 22,
                        "score": 192,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "disregard",
                        "freq": 21,
                        "score": 192,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "unresolved",
                        "freq": 19,
                        "score": 192,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "transformed",
                        "freq": 22,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "counterpart",
                        "freq": 21,
                        "score": 192,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "commandant",
                        "freq": 19,
                        "score": 192,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "up",
                        "freq": 28,
                        "score": 156,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "sap",
                        "freq": 19,
                        "score": 156,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "sup",
                        "freq": 19,
                        "score": 156,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "map",
                        "freq": 23,
                        "score": 156,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "cap",
                        "freq": 22,
                        "score": 156,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "cup",
                        "freq": 22,
                        "score": 156,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "gap",
                        "freq": 22,
                        "score": 156,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "chap",
                        "freq": 21,
                        "score": 156,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "lap",
                        "freq": 21,
                        "score": 156,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "tap",
                        "freq": 21,
                        "score": 156,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "flap",
                        "freq": 20,
                        "score": 156,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "snap",
                        "freq": 20,
                        "score": 156,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "wrap",
                        "freq": 20,
                        "score": 156,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "nap",
                        "freq": 19,
                        "score": 156,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "rap",
                        "freq": 19,
                        "score": 156,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "slap",
                        "freq": 19,
                        "score": 156,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "trap",
                        "freq": 21,
                        "score": 156,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "scrap",
                        "freq": 20,
                        "score": 156,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "strap",
                        "freq": 19,
                        "score": 156,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "overlap",
                        "freq": 21,
                        "score": 156,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "handicap",
                        "freq": 20,
                        "score": 156,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "that",
                        "freq": 31,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "had",
                        "freq": 29,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "such",
                        "freq": 28,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "heard",
                        "freq": 25,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "third",
                        "freq": 25,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "sat",
                        "freq": 24,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "search",
                        "freq": 24,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "fat",
                        "freq": 23,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "sub",
                        "freq": 23,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "hat",
                        "freq": 22,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "hurt",
                        "freq": 22,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "sad",
                        "freq": 22,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "shirt",
                        "freq": 22,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "shut",
                        "freq": 22,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "verb",
                        "freq": 22,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "herd",
                        "freq": 21,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "hut",
                        "freq": 21,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "surge",
                        "freq": 20,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "verge",
                        "freq": 20,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "hatch",
                        "freq": 19,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "hub",
                        "freq": 19,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "but",
                        "freq": 29,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "what",
                        "freq": 28,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "much",
                        "freq": 27,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "church",
                        "freq": 25,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "cut",
                        "freq": 25,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "word",
                        "freq": 25,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "bad",
                        "freq": 24,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "bird",
                        "freq": 23,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "catch",
                        "freq": 23,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "flat",
                        "freq": 23,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "judge",
                        "freq": 23,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "touch",
                        "freq": 23,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "assert",
                        "freq": 22,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "cat",
                        "freq": 22,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "flood",
                        "freq": 22,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "mad",
                        "freq": 22,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "match",
                        "freq": 22,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "mud",
                        "freq": 22,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "rat",
                        "freq": 22,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "dirt",
                        "freq": 21,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "lad",
                        "freq": 21,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "overt",
                        "freq": 21,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "patch",
                        "freq": 21,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "stirred",
                        "freq": 21,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "bat",
                        "freq": 20,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "batch",
                        "freq": 20,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "bud",
                        "freq": 20,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "butt",
                        "freq": 20,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "cab",
                        "freq": 20,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "chat",
                        "freq": 20,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "curb",
                        "freq": 20,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "dad",
                        "freq": 20,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "gut",
                        "freq": 20,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "lab",
                        "freq": 20,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "mat",
                        "freq": 20,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "merge",
                        "freq": 20,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "nut",
                        "freq": 20,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "pad",
                        "freq": 20,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "rub",
                        "freq": 20,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "skirt",
                        "freq": 20,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "slab",
                        "freq": 20,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "tab",
                        "freq": 20,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "tub",
                        "freq": 20,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "avert",
                        "freq": 19,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "badge",
                        "freq": 19,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "birch",
                        "freq": 19,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "latch",
                        "freq": 19,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "nought",
                        "freq": 19,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "pat",
                        "freq": 19,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "perch",
                        "freq": 19,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "pub",
                        "freq": 19,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "purge",
                        "freq": 19,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "scourge",
                        "freq": 19,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "shrub",
                        "freq": 19,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "sludge",
                        "freq": 19,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "snatch",
                        "freq": 19,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "spat",
                        "freq": 19,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "spurred",
                        "freq": 19,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "stab",
                        "freq": 19,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "stud",
                        "freq": 19,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "blood",
                        "freq": 25,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "research",
                        "freq": 25,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "occurred",
                        "freq": 24,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "referred",
                        "freq": 24,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "glad",
                        "freq": 23,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "absurd",
                        "freq": 22,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "club",
                        "freq": 22,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "emerge",
                        "freq": 22,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "alert",
                        "freq": 21,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "attach",
                        "freq": 21,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "exert",
                        "freq": 21,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "inferred",
                        "freq": 21,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "insert",
                        "freq": 21,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "blurred",
                        "freq": 20,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "clad",
                        "freq": 20,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "deferred",
                        "freq": 20,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "divert",
                        "freq": 20,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "grab",
                        "freq": 20,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "inert",
                        "freq": 20,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "scratch",
                        "freq": 20,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "superb",
                        "freq": 20,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "clutch",
                        "freq": 19,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "crab",
                        "freq": 19,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "dessert",
                        "freq": 19,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "diverge",
                        "freq": 19,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "grudge",
                        "freq": 19,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "revert",
                        "freq": 19,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "scrub",
                        "freq": 19,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "unheard",
                        "freq": 19,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "somewhat",
                        "freq": 24,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "preferred",
                        "freq": 23,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "conferred",
                        "freq": 21,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "disturb",
                        "freq": 21,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "incurred",
                        "freq": 21,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "despatch",
                        "freq": 20,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "dispatch",
                        "freq": 20,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "converge",
                        "freq": 19,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "deterred",
                        "freq": 19,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "overheard",
                        "freq": 19,
                        "score": 120,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "habitat",
                        "freq": 20,
                        "score": 120,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "concurred",
                        "freq": 19,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "transferred",
                        "freq": 23,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "coconut",
                        "freq": 19,
                        "score": 120,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "diplomat",
                        "freq": 19,
                        "score": 120,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "camp",
                        "freq": 23,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "lamp",
                        "freq": 22,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "pump",
                        "freq": 22,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "damp",
                        "freq": 21,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "jump",
                        "freq": 21,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "pulp",
                        "freq": 21,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "stamp",
                        "freq": 21,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "lump",
                        "freq": 20,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "scalp",
                        "freq": 20,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "bump",
                        "freq": 19,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "dump",
                        "freq": 19,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "ramp",
                        "freq": 19,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "stump",
                        "freq": 19,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "grasp",
                        "freq": 22,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "clamp",
                        "freq": 19,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "clasp",
                        "freq": 19,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "plump",
                        "freq": 19,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "tramp",
                        "freq": 19,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    }
                ],
                "allRhymes": {
                    "192": [
                        "art",
                        "hard",
                        "heart",
                        "short",
                        "sort",
                        "fault",
                        "salt",
                        "soft",
                        "arch",
                        "fond",
                        "fort",
                        "sword",
                        "halt",
                        "shocked",
                        "font",
                        "hauled",
                        "oft",
                        "vault",
                        "ford",
                        "forge",
                        "haunt",
                        "opt",
                        "soared",
                        "hoard",
                        "hopped",
                        "horde",
                        "orb",
                        "sobbed",
                        "part",
                        "called",
                        "large",
                        "want",
                        "cost",
                        "court",
                        "formed",
                        "lost",
                        "board",
                        "caused",
                        "charge",
                        "forced",
                        "start",
                        "afford",
                        "armed",
                        "bond",
                        "card",
                        "guard",
                        "port",
                        "stopped",
                        "talked",
                        "walked",
                        "watched",
                        "assault",
                        "chart",
                        "cord",
                        "locked",
                        "lord",
                        "march",
                        "poured",
                        "solved",
                        "sport",
                        "stored",
                        "washed",
                        "yard",
                        "cart",
                        "knocked",
                        "launch",
                        "paused",
                        "pond",
                        "porch",
                        "smart",
                        "ward",
                        "arched",
                        "bald",
                        "barred",
                        "bored",
                        "chopped",
                        "chord",
                        "forged",
                        "frost",
                        "honoured",
                        "lodged",
                        "longed",
                        "roared",
                        "robbed",
                        "scored",
                        "starch",
                        "torch",
                        "tossed",
                        "walled",
                        "barge",
                        "bombed",
                        "cocked",
                        "dart",
                        "dawned",
                        "dost",
                        "flocked",
                        "garb",
                        "gorge",
                        "harmed",
                        "loft",
                        "malt",
                        "marred",
                        "mocked",
                        "popped",
                        "rocked",
                        "staunch",
                        "stocked",
                        "thronged",
                        "thwart",
                        "topped",
                        "tort",
                        "wand",
                        "wronged",
                        "bard",
                        "calmed",
                        "charred",
                        "coughed",
                        "dogged",
                        "donned",
                        "farmed",
                        "flogged",
                        "forked",
                        "gaunt",
                        "gourd",
                        "horned",
                        "lard",
                        "logged",
                        "mart",
                        "notched",
                        "scarred",
                        "scoffed",
                        "spawned",
                        "stalked",
                        "stalled",
                        "starred",
                        "tart",
                        "yawned",
                        "beyond",
                        "support",
                        "marked",
                        "apart",
                        "charged",
                        "crossed",
                        "dropped",
                        "adopt",
                        "default",
                        "evolved",
                        "launched",
                        "marched",
                        "resort",
                        "warned",
                        "aboard",
                        "absorb",
                        "accord",
                        "award",
                        "blocked",
                        "carved",
                        "exhaust",
                        "blond",
                        "escort",
                        "parked",
                        "starved",
                        "warmed",
                        "adored",
                        "aloft",
                        "appalled",
                        "barbed",
                        "basalt",
                        "blonde",
                        "charmed",
                        "crawled",
                        "cropped",
                        "propped",
                        "quart",
                        "scorned",
                        "stormed",
                        "abhorred",
                        "abort",
                        "barked",
                        "boxed",
                        "clogged",
                        "exalt",
                        "involved",
                        "report",
                        "toward",
                        "performed",
                        "record",
                        "regard",
                        "discharge",
                        "informed",
                        "resolved",
                        "respond",
                        "absorbed",
                        "belonged",
                        "dissolved",
                        "ignored",
                        "import",
                        "installed",
                        "recalled",
                        "restored",
                        "reward",
                        "alarmed",
                        "depart",
                        "enforced",
                        "prompt",
                        "adorned",
                        "deformed",
                        "divorced",
                        "enlarge",
                        "impart",
                        "reformed",
                        "adsorbed",
                        "consort",
                        "discard",
                        "distort",
                        "overboard",
                        "retard",
                        "revolved",
                        "unarmed",
                        "unlocked",
                        "enlarged",
                        "prolonged",
                        "remarked",
                        "discharged",
                        "explored",
                        "restaurant",
                        "embarked",
                        "endorsed",
                        "conformed",
                        "deplored",
                        "implored",
                        "transport",
                        "correspond",
                        "reinforced",
                        "disregard",
                        "unresolved",
                        "transformed",
                        "counterpart",
                        "commandant"
                    ],
                    "228": [
                        "sharp",
                        "harp",
                        "pomp",
                        "swamp",
                        "comp",
                        "warp",
                        "carp",
                        "wasp"
                    ],
                    "84": [
                        "camp",
                        "lamp",
                        "pump",
                        "damp",
                        "jump",
                        "pulp",
                        "stamp",
                        "lump",
                        "scalp",
                        "bump",
                        "dump",
                        "ramp",
                        "stump",
                        "grasp",
                        "clamp",
                        "clasp",
                        "plump",
                        "tramp"
                    ],
                    "264": [
                        "thought",
                        "hot",
                        "ought",
                        "sought",
                        "fought",
                        "shot",
                        "odd",
                        "aught",
                        "sod",
                        "awed",
                        "sawed",
                        "shod",
                        "sob",
                        "not",
                        "got",
                        "job",
                        "lot",
                        "taught",
                        "bought",
                        "caught",
                        "spot",
                        "watch",
                        "god",
                        "pot",
                        "rod",
                        "fraud",
                        "mob",
                        "wrought",
                        "dot",
                        "knot",
                        "lodge",
                        "nod",
                        "rob",
                        "rot",
                        "slot",
                        "cod",
                        "cot",
                        "flawed",
                        "fraught",
                        "knob",
                        "naught",
                        "notch",
                        "taut",
                        "tot",
                        "yacht",
                        "bob",
                        "dodge",
                        "jot",
                        "laud",
                        "mod",
                        "pod",
                        "throb",
                        "wad",
                        "watt",
                        "brought",
                        "broad",
                        "plot",
                        "forgot",
                        "facade",
                        "squad",
                        "blot",
                        "clot",
                        "trod",
                        "trot",
                        "prod",
                        "squat",
                        "abroad",
                        "applaud",
                        "defraud",
                        "dislodge",
                        "pasturage",
                        "afterthought",
                        "distraught",
                        "fuselage",
                        "kilowatt"
                    ],
                    "120": [
                        "that",
                        "had",
                        "such",
                        "heard",
                        "third",
                        "sat",
                        "search",
                        "fat",
                        "sub",
                        "hat",
                        "hurt",
                        "sad",
                        "shirt",
                        "shut",
                        "verb",
                        "herd",
                        "hut",
                        "surge",
                        "verge",
                        "hatch",
                        "hub",
                        "but",
                        "what",
                        "much",
                        "church",
                        "cut",
                        "word",
                        "bad",
                        "bird",
                        "catch",
                        "flat",
                        "judge",
                        "touch",
                        "assert",
                        "cat",
                        "flood",
                        "mad",
                        "match",
                        "mud",
                        "rat",
                        "dirt",
                        "lad",
                        "overt",
                        "patch",
                        "stirred",
                        "bat",
                        "batch",
                        "bud",
                        "butt",
                        "cab",
                        "chat",
                        "curb",
                        "dad",
                        "gut",
                        "lab",
                        "mat",
                        "merge",
                        "nut",
                        "pad",
                        "rub",
                        "skirt",
                        "slab",
                        "tab",
                        "tub",
                        "avert",
                        "badge",
                        "birch",
                        "latch",
                        "nought",
                        "pat",
                        "perch",
                        "pub",
                        "purge",
                        "scourge",
                        "shrub",
                        "sludge",
                        "snatch",
                        "spat",
                        "spurred",
                        "stab",
                        "stud",
                        "blood",
                        "research",
                        "occurred",
                        "referred",
                        "glad",
                        "absurd",
                        "club",
                        "emerge",
                        "alert",
                        "attach",
                        "exert",
                        "inferred",
                        "insert",
                        "blurred",
                        "clad",
                        "deferred",
                        "divert",
                        "grab",
                        "inert",
                        "scratch",
                        "superb",
                        "clutch",
                        "crab",
                        "dessert",
                        "diverge",
                        "grudge",
                        "revert",
                        "scrub",
                        "unheard",
                        "somewhat",
                        "preferred",
                        "conferred",
                        "disturb",
                        "incurred",
                        "despatch",
                        "dispatch",
                        "converge",
                        "deterred",
                        "overheard",
                        "habitat",
                        "concurred",
                        "transferred",
                        "coconut",
                        "diplomat"
                    ],
                    "300": [
                        "shop",
                        "op",
                        "top",
                        "stop",
                        "pop",
                        "chop",
                        "cop",
                        "swap",
                        "flop",
                        "mop",
                        "drop",
                        "crop",
                        "atop",
                        "prop"
                    ],
                    "156": [
                        "up",
                        "sap",
                        "sup",
                        "map",
                        "cap",
                        "cup",
                        "gap",
                        "chap",
                        "lap",
                        "tap",
                        "flap",
                        "snap",
                        "wrap",
                        "nap",
                        "rap",
                        "slap",
                        "trap",
                        "scrap",
                        "strap",
                        "overlap",
                        "handicap"
                    ]
                }
            },
            {
                "search": "hop, skip, and jump",
                "rhymes": [
                    {
                        "word": "pump",
                        "freq": 22,
                        "score": 300,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "jump",
                        "freq": 21,
                        "score": 300,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "bump",
                        "freq": 19,
                        "score": 300,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "dump",
                        "freq": 19,
                        "score": 300,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "chump",
                        "freq": 15,
                        "score": 300,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "lump",
                        "freq": 20,
                        "score": 300,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "plump",
                        "freq": 19,
                        "score": 300,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "stump",
                        "freq": 19,
                        "score": 300,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "hump",
                        "freq": 18,
                        "score": 300,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "rump",
                        "freq": 18,
                        "score": 300,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "thump",
                        "freq": 18,
                        "score": 300,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "trump",
                        "freq": 18,
                        "score": 300,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "sump",
                        "freq": 17,
                        "score": 300,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "clump",
                        "freq": 18,
                        "score": 300,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "slump",
                        "freq": 18,
                        "score": 300,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "bunch",
                        "freq": 21,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "punch",
                        "freq": 20,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "summed",
                        "freq": 20,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "drummed",
                        "freq": 17,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "hummed",
                        "freq": 17,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "numbed",
                        "freq": 17,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "punt",
                        "freq": 17,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "tongued",
                        "freq": 17,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "bunt",
                        "freq": 16,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "gummed",
                        "freq": 16,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "thumbed",
                        "freq": 16,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "plumbed",
                        "freq": 15,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "fund",
                        "freq": 22,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "lunch",
                        "freq": 22,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "hunt",
                        "freq": 21,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "blunt",
                        "freq": 20,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "plunge",
                        "freq": 20,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "shunt",
                        "freq": 20,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "sponge",
                        "freq": 20,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "stunned",
                        "freq": 20,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "brunt",
                        "freq": 18,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "hunch",
                        "freq": 18,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "shunned",
                        "freq": 18,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "stunt",
                        "freq": 18,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "cunt",
                        "freq": 17,
                        "score": 264,
                        "syllables": 1,
                        "offensive": true
                    },
                    {
                        "word": "gunned",
                        "freq": 17,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "lunge",
                        "freq": 17,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "benumbed",
                        "freq": 16,
                        "score": 264,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "brunch",
                        "freq": 16,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "gerund",
                        "freq": 16,
                        "score": 264,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "munch",
                        "freq": 15,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "runt",
                        "freq": 15,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "front",
                        "freq": 25,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "succumbed",
                        "freq": 19,
                        "score": 264,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "grunt",
                        "freq": 18,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "crunch",
                        "freq": 17,
                        "score": 264,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "rotund",
                        "freq": 16,
                        "score": 264,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "jocund",
                        "freq": 15,
                        "score": 264,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "confront",
                        "freq": 21,
                        "score": 264,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "affront",
                        "freq": 19,
                        "score": 264,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "refund",
                        "freq": 19,
                        "score": 264,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "expunge",
                        "freq": 16,
                        "score": 264,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "fecund",
                        "freq": 16,
                        "score": 264,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "waterfront",
                        "freq": 18,
                        "score": 264,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "battlefront",
                        "freq": 15,
                        "score": 264,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "riverfront",
                        "freq": 15,
                        "score": 264,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "pulp",
                        "freq": 21,
                        "score": 228,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "pup",
                        "freq": 17,
                        "score": 228,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "cup",
                        "freq": 22,
                        "score": 228,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "sup",
                        "freq": 19,
                        "score": 228,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "cusp",
                        "freq": 18,
                        "score": 228,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "gulp",
                        "freq": 17,
                        "score": 228,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "workup",
                        "freq": 16,
                        "score": 228,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "buttercup",
                        "freq": 15,
                        "score": 228,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "closeup",
                        "freq": 15,
                        "score": 228,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "but",
                        "freq": 29,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "just",
                        "freq": 27,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "dust",
                        "freq": 23,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "judge",
                        "freq": 23,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "touch",
                        "freq": 23,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "judged",
                        "freq": 22,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "touched",
                        "freq": 22,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "duct",
                        "freq": 21,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "jumped",
                        "freq": 21,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "bud",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "bulb",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "bust",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "butt",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "tub",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "tucked",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "dubbed",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "dumped",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "pub",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "puffed",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "pumped",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "budge",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "bulge",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "bumped",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "ducked",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "dulled",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "tuft",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "tugged",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "buzzed",
                        "freq": 17,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "dub",
                        "freq": 17,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "putt",
                        "freq": 17,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "tut",
                        "freq": 17,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "bucked",
                        "freq": 16,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "bugged",
                        "freq": 16,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "chucked",
                        "freq": 16,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "jut",
                        "freq": 16,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "budged",
                        "freq": 15,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "bused",
                        "freq": 15,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "chid",
                        "freq": 15,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "chub",
                        "freq": 15,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "chugged",
                        "freq": 15,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "dud",
                        "freq": 15,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "dutch",
                        "freq": 15,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "such",
                        "freq": 28,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "what",
                        "freq": 28,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "much",
                        "freq": 27,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "must",
                        "freq": 27,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "blood",
                        "freq": 25,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "cut",
                        "freq": 25,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "trust",
                        "freq": 24,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "adult",
                        "freq": 23,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "loved",
                        "freq": 23,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "sub",
                        "freq": 23,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "mud",
                        "freq": 22,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "rushed",
                        "freq": 22,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "shut",
                        "freq": 22,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "adjust",
                        "freq": 21,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "cult",
                        "freq": 21,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "hut",
                        "freq": 21,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "unjust",
                        "freq": 21,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "brushed",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "gut",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "lust",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "nut",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "rub",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "rubbed",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "stuffed",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "untouched",
                        "freq": 20,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "blushed",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "hub",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "hugged",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "hushed",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "nought",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "plucked",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "punched",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "rust",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "shoved",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "stud",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "sucked",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "adjudged",
                        "freq": 18,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "cub",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "culled",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "cupped",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "deduct",
                        "freq": 18,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "gust",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "lulled",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "lumped",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "mot",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "plugged",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "pulsed",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "stub",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "thud",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "trudged",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "bulged",
                        "freq": 17,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "bunched",
                        "freq": 17,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "cud",
                        "freq": 17,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "drugged",
                        "freq": 17,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "fucked",
                        "freq": 17,
                        "score": 192,
                        "syllables": 1,
                        "offensive": true
                    },
                    {
                        "word": "gushed",
                        "freq": 17,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "mulch",
                        "freq": 17,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "nudge",
                        "freq": 17,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "nudged",
                        "freq": 17,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "rut",
                        "freq": 17,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "supped",
                        "freq": 17,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "thumped",
                        "freq": 17,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "wot",
                        "freq": 17,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "abduct",
                        "freq": 16,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "abut",
                        "freq": 16,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "adjudge",
                        "freq": 16,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "cuffed",
                        "freq": 16,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "cussed",
                        "freq": 16,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "drudge",
                        "freq": 16,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "fudge",
                        "freq": 16,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "fussed",
                        "freq": 16,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "gulch",
                        "freq": 16,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "hulled",
                        "freq": 16,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "humped",
                        "freq": 16,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "lugged",
                        "freq": 16,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "mulled",
                        "freq": 16,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "mutt",
                        "freq": 16,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "nub",
                        "freq": 16,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "stumped",
                        "freq": 16,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "tousled",
                        "freq": 16,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "trudge",
                        "freq": 16,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "trumped",
                        "freq": 16,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "trussed",
                        "freq": 16,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "bluffed",
                        "freq": 15,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "huffed",
                        "freq": 15,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "hutch",
                        "freq": 15,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "mugged",
                        "freq": 15,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "mussed",
                        "freq": 15,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "plumped",
                        "freq": 15,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "roughed",
                        "freq": 15,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "ruffed",
                        "freq": 15,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "stubbed",
                        "freq": 15,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "conduct",
                        "freq": 24,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "somewhat",
                        "freq": 24,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "beloved",
                        "freq": 22,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "club",
                        "freq": 22,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "flood",
                        "freq": 22,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "thrust",
                        "freq": 22,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "corrupt",
                        "freq": 21,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "crushed",
                        "freq": 21,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "robust",
                        "freq": 21,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "abrupt",
                        "freq": 20,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "crust",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "flushed",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "indulge",
                        "freq": 20,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "interrupt",
                        "freq": 20,
                        "score": 192,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "occult",
                        "freq": 20,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "plunged",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "shrugged",
                        "freq": 20,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "antitrust",
                        "freq": 19,
                        "score": 192,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "clutch",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "clutched",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "grudge",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "shrub",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "sludge",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "entrust",
                        "freq": 18,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "erupt",
                        "freq": 18,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "grub",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "hunched",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "slumped",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "strut",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "undercut",
                        "freq": 18,
                        "score": 192,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "clubbed",
                        "freq": 17,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "crutch",
                        "freq": 17,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "divulge",
                        "freq": 17,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "gloved",
                        "freq": 17,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "glut",
                        "freq": 17,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "gulped",
                        "freq": 17,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "lunched",
                        "freq": 17,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "lunged",
                        "freq": 17,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "misjudged",
                        "freq": 17,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "rebuffed",
                        "freq": 17,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "rebut",
                        "freq": 17,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "retouched",
                        "freq": 17,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "slut",
                        "freq": 17,
                        "score": 192,
                        "syllables": 1,
                        "offensive": true
                    },
                    {
                        "word": "snub",
                        "freq": 17,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "snubbed",
                        "freq": 17,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "tsarist",
                        "freq": 17,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "uncut",
                        "freq": 17,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "behoved",
                        "freq": 16,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "clumped",
                        "freq": 16,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "grudged",
                        "freq": 16,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "intrust",
                        "freq": 16,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "munched",
                        "freq": 16,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "sloughed",
                        "freq": 16,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "smudge",
                        "freq": 16,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "smudged",
                        "freq": 16,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "smut",
                        "freq": 16,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "snuffed",
                        "freq": 16,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "sulked",
                        "freq": 16,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "unloved",
                        "freq": 16,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "result",
                        "freq": 26,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "discussed",
                        "freq": 24,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "amongst",
                        "freq": 23,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "construct",
                        "freq": 22,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "consult",
                        "freq": 21,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "disgust",
                        "freq": 21,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "distrust",
                        "freq": 21,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "insult",
                        "freq": 21,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "indulged",
                        "freq": 20,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "instruct",
                        "freq": 20,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "disrupt",
                        "freq": 19,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "mistrust",
                        "freq": 19,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "obstruct",
                        "freq": 19,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "repulsed",
                        "freq": 19,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "scrub",
                        "freq": 19,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "aqueduct",
                        "freq": 18,
                        "score": 192,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "defunct",
                        "freq": 18,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "insomuch",
                        "freq": 18,
                        "score": 192,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "scrubbed",
                        "freq": 18,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "divulged",
                        "freq": 17,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "exult",
                        "freq": 17,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "readjust",
                        "freq": 17,
                        "score": 192,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "begrudge",
                        "freq": 16,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "catapult",
                        "freq": 16,
                        "score": 192,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "conjunct",
                        "freq": 16,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "crunched",
                        "freq": 16,
                        "score": 192,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "nonplussed",
                        "freq": 16,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "coconut",
                        "freq": 19,
                        "score": 192,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "convulsed",
                        "freq": 18,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "engulfed",
                        "freq": 18,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "expunged",
                        "freq": 17,
                        "score": 192,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "overmuch",
                        "freq": 17,
                        "score": 192,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "overstuffed",
                        "freq": 16,
                        "score": 192,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "reconstruct",
                        "freq": 20,
                        "score": 192,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "deconstruct",
                        "freq": 16,
                        "score": 192,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "damp",
                        "freq": 21,
                        "score": 156,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "pomp",
                        "freq": 20,
                        "score": 156,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "champ",
                        "freq": 17,
                        "score": 156,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "camp",
                        "freq": 23,
                        "score": 156,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "lamp",
                        "freq": 22,
                        "score": 156,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "stamp",
                        "freq": 21,
                        "score": 156,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "comp",
                        "freq": 19,
                        "score": 156,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "ramp",
                        "freq": 19,
                        "score": 156,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "tramp",
                        "freq": 19,
                        "score": 156,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "romp",
                        "freq": 16,
                        "score": 156,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "stomp",
                        "freq": 16,
                        "score": 156,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "swamp",
                        "freq": 20,
                        "score": 156,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "clamp",
                        "freq": 19,
                        "score": 156,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "cramp",
                        "freq": 17,
                        "score": 156,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "scamp",
                        "freq": 16,
                        "score": 156,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "encamp",
                        "freq": 16,
                        "score": 156,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "termed",
                        "freq": 22,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "damned",
                        "freq": 20,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "bombed",
                        "freq": 19,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "jammed",
                        "freq": 19,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "dammed",
                        "freq": 17,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "turned",
                        "freq": 25,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "band",
                        "freq": 23,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "bond",
                        "freq": 23,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "burned",
                        "freq": 22,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "burnt",
                        "freq": 21,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "pond",
                        "freq": 21,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "banned",
                        "freq": 20,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "chant",
                        "freq": 19,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "banged",
                        "freq": 18,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "calmed",
                        "freq": 18,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "donned",
                        "freq": 18,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "tanned",
                        "freq": 18,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "churned",
                        "freq": 17,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "pant",
                        "freq": 17,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "rammed",
                        "freq": 17,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "panned",
                        "freq": 16,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "hand",
                        "freq": 26,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "land",
                        "freq": 26,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "want",
                        "freq": 26,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "beyond",
                        "freq": 25,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "learned",
                        "freq": 24,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "plant",
                        "freq": 24,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "stand",
                        "freq": 24,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "branch",
                        "freq": 23,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "planned",
                        "freq": 23,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "sand",
                        "freq": 23,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "fond",
                        "freq": 22,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "affirmed",
                        "freq": 21,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "brand",
                        "freq": 21,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "learnt",
                        "freq": 21,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "blond",
                        "freq": 20,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "font",
                        "freq": 20,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "hanged",
                        "freq": 20,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "ranch",
                        "freq": 20,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "adjourned",
                        "freq": 19,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "bland",
                        "freq": 19,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "blonde",
                        "freq": 19,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "canned",
                        "freq": 19,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "cant",
                        "freq": 19,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "crammed",
                        "freq": 19,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "manned",
                        "freq": 19,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "slammed",
                        "freq": 19,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "wand",
                        "freq": 19,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "detente",
                        "freq": 18,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "fanned",
                        "freq": 18,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "spanned",
                        "freq": 18,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "spurned",
                        "freq": 18,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "unplanned",
                        "freq": 18,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "yearned",
                        "freq": 18,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "conch",
                        "freq": 17,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "embalmed",
                        "freq": 17,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "rant",
                        "freq": 17,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "becalmed",
                        "freq": 16,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "blanch",
                        "freq": 16,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "conned",
                        "freq": 16,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "rand",
                        "freq": 16,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "stanch",
                        "freq": 16,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "tranche",
                        "freq": 16,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "understand",
                        "freq": 25,
                        "score": 120,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "demand",
                        "freq": 24,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "returned",
                        "freq": 24,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "confirmed",
                        "freq": 23,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "grand",
                        "freq": 23,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "grant",
                        "freq": 23,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "gland",
                        "freq": 21,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "discerned",
                        "freq": 20,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "strand",
                        "freq": 20,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "flange",
                        "freq": 19,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "implant",
                        "freq": 19,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "scanned",
                        "freq": 19,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "scant",
                        "freq": 19,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "slant",
                        "freq": 19,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "supplant",
                        "freq": 18,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "unlearned",
                        "freq": 18,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "disband",
                        "freq": 17,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "squirmed",
                        "freq": 17,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "underhand",
                        "freq": 17,
                        "score": 120,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "unearned",
                        "freq": 17,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "unmanned",
                        "freq": 17,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "enchant",
                        "freq": 16,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "frond",
                        "freq": 16,
                        "score": 120,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "harangued",
                        "freq": 16,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "command",
                        "freq": 24,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "concerned",
                        "freq": 24,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "respond",
                        "freq": 23,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "expand",
                        "freq": 22,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "avalanche",
                        "freq": 19,
                        "score": 120,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "commandant",
                        "freq": 19,
                        "score": 120,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "contraband",
                        "freq": 19,
                        "score": 120,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "hinterland",
                        "freq": 19,
                        "score": 120,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "overturned",
                        "freq": 19,
                        "score": 120,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "reaffirmed",
                        "freq": 19,
                        "score": 120,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "confidant",
                        "freq": 18,
                        "score": 120,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "fatherland",
                        "freq": 18,
                        "score": 120,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "firsthand",
                        "freq": 18,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "misunderstand",
                        "freq": 18,
                        "score": 120,
                        "syllables": 4,
                        "offensive": false
                    },
                    {
                        "word": "secondhand",
                        "freq": 18,
                        "score": 120,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "confidante",
                        "freq": 17,
                        "score": 120,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "dilettante",
                        "freq": 17,
                        "score": 120,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "offhand",
                        "freq": 17,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "recant",
                        "freq": 17,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "remand",
                        "freq": 17,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "savant",
                        "freq": 17,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "diagrammed",
                        "freq": 16,
                        "score": 120,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "firebrand",
                        "freq": 16,
                        "score": 120,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "secant",
                        "freq": 16,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "unconfirmed",
                        "freq": 16,
                        "score": 120,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "waistband",
                        "freq": 16,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "wonderland",
                        "freq": 16,
                        "score": 120,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "correspond",
                        "freq": 22,
                        "score": 120,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "restaurant",
                        "freq": 21,
                        "score": 120,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "withstand",
                        "freq": 20,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "overland",
                        "freq": 19,
                        "score": 120,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "unconcerned",
                        "freq": 18,
                        "score": 120,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "borderland",
                        "freq": 17,
                        "score": 120,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "discrepant",
                        "freq": 17,
                        "score": 120,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "motherland",
                        "freq": 17,
                        "score": 120,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "analysand",
                        "freq": 16,
                        "score": 120,
                        "syllables": 4,
                        "offensive": false
                    },
                    {
                        "word": "fairyland",
                        "freq": 16,
                        "score": 120,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "nonchalant",
                        "freq": 16,
                        "score": 120,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "transplant",
                        "freq": 20,
                        "score": 120,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "reprimand",
                        "freq": 18,
                        "score": 120,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "relaxant",
                        "freq": 16,
                        "score": 120,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "top",
                        "freq": 25,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "chap",
                        "freq": 21,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "pop",
                        "freq": 21,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "tap",
                        "freq": 21,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "chop",
                        "freq": 19,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "chirp",
                        "freq": 17,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "pap",
                        "freq": 17,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "tarp",
                        "freq": 16,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "stop",
                        "freq": 24,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "drop",
                        "freq": 23,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "map",
                        "freq": 23,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "sharp",
                        "freq": 23,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "shop",
                        "freq": 23,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "cap",
                        "freq": 22,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "gap",
                        "freq": 22,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "lap",
                        "freq": 21,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "trap",
                        "freq": 21,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "wrap",
                        "freq": 20,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "atop",
                        "freq": 19,
                        "score": 84,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "cop",
                        "freq": 19,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "harp",
                        "freq": 19,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "hop",
                        "freq": 19,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "nap",
                        "freq": 19,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "prop",
                        "freq": 19,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "rap",
                        "freq": 19,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "sap",
                        "freq": 19,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "carp",
                        "freq": 18,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "gasp",
                        "freq": 18,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "mop",
                        "freq": 18,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "wasp",
                        "freq": 18,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "hap",
                        "freq": 17,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "lop",
                        "freq": 17,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "sop",
                        "freq": 17,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "rasp",
                        "freq": 16,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "crop",
                        "freq": 22,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "grasp",
                        "freq": 22,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "flap",
                        "freq": 20,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "handicap",
                        "freq": 20,
                        "score": 84,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "scalp",
                        "freq": 20,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "snap",
                        "freq": 20,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "clasp",
                        "freq": 19,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "slap",
                        "freq": 19,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "strap",
                        "freq": 19,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "swap",
                        "freq": 19,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "clap",
                        "freq": 18,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "crap",
                        "freq": 18,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "flop",
                        "freq": 18,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "bitmap",
                        "freq": 17,
                        "score": 84,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "scarp",
                        "freq": 17,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "slop",
                        "freq": 17,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "entrap",
                        "freq": 16,
                        "score": 84,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "scrap",
                        "freq": 20,
                        "score": 84,
                        "syllables": 1,
                        "offensive": false
                    },
                    {
                        "word": "usurp",
                        "freq": 18,
                        "score": 84,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "nonstop",
                        "freq": 17,
                        "score": 84,
                        "syllables": 2,
                        "offensive": false
                    },
                    {
                        "word": "overlap",
                        "freq": 21,
                        "score": 84,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "barbershop",
                        "freq": 16,
                        "score": 84,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "mountaintop",
                        "freq": 16,
                        "score": 84,
                        "syllables": 3,
                        "offensive": false
                    },
                    {
                        "word": "tabletop",
                        "freq": 16,
                        "score": 84,
                        "syllables": 3,
                        "offensive": false
                    }
                ],
                "allRhymes": {
                    "192": [
                        "but",
                        "just",
                        "dust",
                        "judge",
                        "touch",
                        "judged",
                        "touched",
                        "duct",
                        "jumped",
                        "bud",
                        "bulb",
                        "bust",
                        "butt",
                        "tub",
                        "tucked",
                        "dubbed",
                        "dumped",
                        "pub",
                        "puffed",
                        "pumped",
                        "budge",
                        "bulge",
                        "bumped",
                        "ducked",
                        "dulled",
                        "tuft",
                        "tugged",
                        "buzzed",
                        "dub",
                        "putt",
                        "tut",
                        "bucked",
                        "bugged",
                        "chucked",
                        "jut",
                        "budged",
                        "bused",
                        "chid",
                        "chub",
                        "chugged",
                        "dud",
                        "dutch",
                        "such",
                        "what",
                        "much",
                        "must",
                        "blood",
                        "cut",
                        "trust",
                        "adult",
                        "loved",
                        "sub",
                        "mud",
                        "rushed",
                        "shut",
                        "adjust",
                        "cult",
                        "hut",
                        "unjust",
                        "brushed",
                        "gut",
                        "lust",
                        "nut",
                        "rub",
                        "rubbed",
                        "stuffed",
                        "untouched",
                        "blushed",
                        "hub",
                        "hugged",
                        "hushed",
                        "nought",
                        "plucked",
                        "punched",
                        "rust",
                        "shoved",
                        "stud",
                        "sucked",
                        "adjudged",
                        "cub",
                        "culled",
                        "cupped",
                        "deduct",
                        "gust",
                        "lulled",
                        "lumped",
                        "mot",
                        "plugged",
                        "pulsed",
                        "stub",
                        "thud",
                        "trudged",
                        "bulged",
                        "bunched",
                        "cud",
                        "drugged",
                        "fucked",
                        "gushed",
                        "mulch",
                        "nudge",
                        "nudged",
                        "rut",
                        "supped",
                        "thumped",
                        "wot",
                        "abduct",
                        "abut",
                        "adjudge",
                        "cuffed",
                        "cussed",
                        "drudge",
                        "fudge",
                        "fussed",
                        "gulch",
                        "hulled",
                        "humped",
                        "lugged",
                        "mulled",
                        "mutt",
                        "nub",
                        "stumped",
                        "tousled",
                        "trudge",
                        "trumped",
                        "trussed",
                        "bluffed",
                        "huffed",
                        "hutch",
                        "mugged",
                        "mussed",
                        "plumped",
                        "roughed",
                        "ruffed",
                        "stubbed",
                        "conduct",
                        "somewhat",
                        "beloved",
                        "club",
                        "flood",
                        "thrust",
                        "corrupt",
                        "crushed",
                        "robust",
                        "abrupt",
                        "crust",
                        "flushed",
                        "indulge",
                        "interrupt",
                        "occult",
                        "plunged",
                        "shrugged",
                        "antitrust",
                        "clutch",
                        "clutched",
                        "grudge",
                        "shrub",
                        "sludge",
                        "entrust",
                        "erupt",
                        "grub",
                        "hunched",
                        "slumped",
                        "strut",
                        "undercut",
                        "clubbed",
                        "crutch",
                        "divulge",
                        "gloved",
                        "glut",
                        "gulped",
                        "lunched",
                        "lunged",
                        "misjudged",
                        "rebuffed",
                        "rebut",
                        "retouched",
                        "slut",
                        "snub",
                        "snubbed",
                        "tsarist",
                        "uncut",
                        "behoved",
                        "clumped",
                        "grudged",
                        "intrust",
                        "munched",
                        "sloughed",
                        "smudge",
                        "smudged",
                        "smut",
                        "snuffed",
                        "sulked",
                        "unloved",
                        "result",
                        "discussed",
                        "amongst",
                        "construct",
                        "consult",
                        "disgust",
                        "distrust",
                        "insult",
                        "indulged",
                        "instruct",
                        "disrupt",
                        "mistrust",
                        "obstruct",
                        "repulsed",
                        "scrub",
                        "aqueduct",
                        "defunct",
                        "insomuch",
                        "scrubbed",
                        "divulged",
                        "exult",
                        "readjust",
                        "begrudge",
                        "catapult",
                        "conjunct",
                        "crunched",
                        "nonplussed",
                        "coconut",
                        "convulsed",
                        "engulfed",
                        "expunged",
                        "overmuch",
                        "overstuffed",
                        "reconstruct",
                        "deconstruct"
                    ],
                    "228": [
                        "pulp",
                        "pup",
                        "cup",
                        "sup",
                        "cusp",
                        "gulp",
                        "workup",
                        "buttercup",
                        "closeup"
                    ],
                    "84": [
                        "top",
                        "chap",
                        "pop",
                        "tap",
                        "chop",
                        "chirp",
                        "pap",
                        "tarp",
                        "stop",
                        "drop",
                        "map",
                        "sharp",
                        "shop",
                        "cap",
                        "gap",
                        "lap",
                        "trap",
                        "wrap",
                        "atop",
                        "cop",
                        "harp",
                        "hop",
                        "nap",
                        "prop",
                        "rap",
                        "sap",
                        "carp",
                        "gasp",
                        "mop",
                        "wasp",
                        "hap",
                        "lop",
                        "sop",
                        "rasp",
                        "crop",
                        "grasp",
                        "flap",
                        "handicap",
                        "scalp",
                        "snap",
                        "clasp",
                        "slap",
                        "strap",
                        "swap",
                        "clap",
                        "crap",
                        "flop",
                        "bitmap",
                        "scarp",
                        "slop",
                        "entrap",
                        "scrap",
                        "usurp",
                        "nonstop",
                        "overlap",
                        "barbershop",
                        "mountaintop",
                        "tabletop"
                    ],
                    "264": [
                        "bunch",
                        "punch",
                        "summed",
                        "drummed",
                        "hummed",
                        "numbed",
                        "punt",
                        "tongued",
                        "bunt",
                        "gummed",
                        "thumbed",
                        "plumbed",
                        "fund",
                        "lunch",
                        "hunt",
                        "blunt",
                        "plunge",
                        "shunt",
                        "sponge",
                        "stunned",
                        "brunt",
                        "hunch",
                        "shunned",
                        "stunt",
                        "cunt",
                        "gunned",
                        "lunge",
                        "benumbed",
                        "brunch",
                        "gerund",
                        "munch",
                        "runt",
                        "front",
                        "succumbed",
                        "grunt",
                        "crunch",
                        "rotund",
                        "jocund",
                        "confront",
                        "affront",
                        "refund",
                        "expunge",
                        "fecund",
                        "waterfront",
                        "battlefront",
                        "riverfront"
                    ],
                    "120": [
                        "termed",
                        "damned",
                        "bombed",
                        "jammed",
                        "dammed",
                        "turned",
                        "band",
                        "bond",
                        "burned",
                        "burnt",
                        "pond",
                        "banned",
                        "chant",
                        "banged",
                        "calmed",
                        "donned",
                        "tanned",
                        "churned",
                        "pant",
                        "rammed",
                        "panned",
                        "hand",
                        "land",
                        "want",
                        "beyond",
                        "learned",
                        "plant",
                        "stand",
                        "branch",
                        "planned",
                        "sand",
                        "fond",
                        "affirmed",
                        "brand",
                        "learnt",
                        "blond",
                        "font",
                        "hanged",
                        "ranch",
                        "adjourned",
                        "bland",
                        "blonde",
                        "canned",
                        "cant",
                        "crammed",
                        "manned",
                        "slammed",
                        "wand",
                        "detente",
                        "fanned",
                        "spanned",
                        "spurned",
                        "unplanned",
                        "yearned",
                        "conch",
                        "embalmed",
                        "rant",
                        "becalmed",
                        "blanch",
                        "conned",
                        "rand",
                        "stanch",
                        "tranche",
                        "understand",
                        "demand",
                        "returned",
                        "confirmed",
                        "grand",
                        "grant",
                        "gland",
                        "discerned",
                        "strand",
                        "flange",
                        "implant",
                        "scanned",
                        "scant",
                        "slant",
                        "supplant",
                        "unlearned",
                        "disband",
                        "squirmed",
                        "underhand",
                        "unearned",
                        "unmanned",
                        "enchant",
                        "frond",
                        "harangued",
                        "command",
                        "concerned",
                        "respond",
                        "expand",
                        "avalanche",
                        "commandant",
                        "contraband",
                        "hinterland",
                        "overturned",
                        "reaffirmed",
                        "confidant",
                        "fatherland",
                        "firsthand",
                        "misunderstand",
                        "secondhand",
                        "confidante",
                        "dilettante",
                        "offhand",
                        "recant",
                        "remand",
                        "savant",
                        "diagrammed",
                        "firebrand",
                        "secant",
                        "unconfirmed",
                        "waistband",
                        "wonderland",
                        "correspond",
                        "restaurant",
                        "withstand",
                        "overland",
                        "unconcerned",
                        "borderland",
                        "discrepant",
                        "motherland",
                        "analysand",
                        "fairyland",
                        "nonchalant",
                        "transplant",
                        "reprimand",
                        "relaxant"
                    ],
                    "300": [
                        "pump",
                        "jump",
                        "bump",
                        "dump",
                        "chump",
                        "lump",
                        "plump",
                        "stump",
                        "hump",
                        "rump",
                        "thump",
                        "trump",
                        "sump",
                        "clump",
                        "slump"
                    ],
                    "156": [
                        "damp",
                        "pomp",
                        "champ",
                        "camp",
                        "lamp",
                        "stamp",
                        "comp",
                        "ramp",
                        "tramp",
                        "romp",
                        "stomp",
                        "swamp",
                        "clamp",
                        "cramp",
                        "scamp",
                        "encamp"
                    ]
                }
            }
        ]
    }
)
