import {
    type CloudRecord,
    type ElementType,
    type reactWordCloud,
    stringToWordCloudArray,
    stringToStringArray
} from "~/data/cloud_data";
import {useRef, useState} from "react";
import {combi_mock, sample, words} from "~/data/sample_words";
import axios from "axios";

// import type {Words} from "~/model/words";

export function CloudGenerator({
    setLoaded,
    clouds,
    cloud, setCloud,
    cloud_id, setCloudId,
    word, setWord,
    explicit, setExplicit,
    setResults,
    setEditCloud
}: any) {

    const LIMIT: string = "10";

    const explicitCheckRef = useRef(null);
    const typesCheckRef = useRef(null);

    const [synonyms, setSynonyms] = useState<boolean>(false);
    const [antonyms, setAntonyms] = useState<boolean>(false);
    const [rhyming, setRhyming] = useState<boolean>(false);

    const [newCloudName, setNewCloudName] = useState<string>("");

    const [error, setError] = useState<string>();

    function getSampleWords(explicit: boolean, word: string[]) {
        // console.log(`Load sample for word: ${word}, ${explicit ? "not" : ""} including explicit words.`)
        setResults(sample());
        setLoaded(true);
        console.log(`Words requested: ${JSON.stringify(sample()[0])}`)
    }

    //Gets mock that reflects the object structure coming from upstream
    function getMockWords(explicit: boolean, word: string[]) {
        // console.log(`Load sample for word: ${word}, ${explicit ? "not" : ""} including explicit words.`)
        setResults(combi_mock());
        setLoaded(true);

        // console.log(`Words requested: ${JSON.stringify(combi_mock())}`)
    }

    const getWords =
        async (explicit:boolean, limit:string, word:string) => {
        //TODO check mock models against current live

        // const searchArray = word.map(w => w.name)

        console.log(`Searching for tracks for cloud gen: ${JSON.stringify(word)}`);

        axios
            .get<[]>(`/wordsaurus/combi/${word}`)
            .then((res) => {
                setResults(res.data);
                setLoaded(true);
                setError("");
                console.log(`Results from api: ${JSON.stringify(res.data)}`);
            })
            .catch((err) => {
                setError(err.message);
                setLoaded(true);
            });
    };

    return (
        <div className="p-3 border-2 border-purple-600">
            <form>
                <div className="border-0">
                    <label htmlFor="cloudSelect" className="pl-4">Cloud:</label>
                    <select name="cloudSelect" id="cloudSelect"
                            className="ml-2 px-1 border border-black"
                            defaultValue='default'
                            onChange={e => {
                                setCloudId(e.target.value);
                                setLoaded(false);
                                setEditCloud(false);
                            }}
                    >
                        <option value='default' disabled={true} key='choose_cloud'>Choose cloud</option>
                        <option value="new_cloud" key="new_cloud">Add new cloud</option>
                        {clouds.map((cloud) =>
                            <option value={cloud.cloud_id} key={cloud.cloud_id}>{cloud.title}</option>
                        )}
                    </select>
                </div>

                {/*{(cloud_id !== "new_cloud") &&*/}
                {/*    <div className="mb-13.5">&nbsp;</div>*/}
                {/*}*/}

                <div>
                    {cloud_id && cloud_id == "new_cloud" &&
                        <>
                            <div className="mt-0">
                                <label htmlFor="new_cloud_input" className="pl-4">Name: </label>
                                <input type="text" id="new_cloud_name"
                                       className="pl-1 ml-1 border border-black w-34.75"
                                       onChange={(e) => {
                                           setNewCloudName(e.target.value);
                                       }}
                                />
                            </div>
                            <div>
                                <button className="px-1 mt-1 ml-31.75 border border-black w-fit"
                                        onClick={e => {
                                            e.preventDefault();
                                            setCloud();
                                            setLoaded(false);
                                        }}>Add cloud
                                </button>
                            </div>
                        </>}
                </div>

                <div className="border-0 border-purple-200">
                    <label htmlFor="word" className="pl-4">Word: </label>
                    <input type="text" id="word_search" name="word_search"
                           className="w-auto pl-1 mt-4 ml-2 mb-1 border border-black max-w-47"
                           onChange={(e) => {
                               e.preventDefault();
                               setWord(e.target.value);
                           }}
                    />
                </div>

                <button className="px-1 mt-2 ml-31.5 border border-black w-fit"
                        onClick={e => {
                            e.preventDefault();

                            getMockWords(explicit, word);
                            // getSampleWords(explicit, word);
                            // getWords(explicit, LIMIT, word);

                        }}>Get words
                </button>
            </form>
        </div>
    );
}
