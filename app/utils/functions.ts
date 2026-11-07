
//Gets mock that reflects the object structure coming from upstream
import {combi_mock} from "~/data/sample_words";

 function getMockWords(explicit: boolean, word: string[],
    setResults, setLoaded
) {
    // console.log(`Load sample for word: ${word}, ${explicit ? "not" : ""} including explicit words.`)
    setResults(combi_mock());
    setLoaded(true);

    // console.log(`Words requested: ${JSON.stringify(combi_mock())}`)
}