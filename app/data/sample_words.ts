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
