import {useRef, useState} from "react";
import {combi_mock} from "~/data/sample_words";
import axios from "axios";
import {LIMIT} from "~/utils/constants";

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

    const explicitCheckRef = useRef(null);
    const typesCheckRef = useRef(null);

    const [synonyms, setSynonyms] = useState<boolean>(false);
    const [antonyms, setAntonyms] = useState<boolean>(false);
    const [rhyming, setRhyming] = useState<boolean>(false);

    const [newCloudName, setNewCloudName] = useState<string>("");

    const [error, setError] = useState<string>();

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
        <div className="w-fit pr-2 pb-1 mt-0 border-3 border-purple-400">
            <form>
                <div className="border-0">
                    <label htmlFor="cloudSelect" className="pl-2">Cloud:</label>
                    <select name="cloudSelect" id="cloudSelect"
                            className="ml-2 pl-2 pr-1
                                       border border-black
                                       max-w-60 whitespace-normal text-ellipsis
                                      "
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
                                <label htmlFor="new_cloud_input" className="pl-2">Name: </label>
                                <input type="text" id="new_cloud_name"
                                       className="grow pl-1 ml-1 border border-black w-auto"
                                       onChange={(e) => {
                                           setNewCloudName(e.target.value);
                                       }}
                                />
                            </div>
                            <div className="flex flex-row justify-between w-full">
                                <span>&nbsp;</span>
                                <button className="ml-2 mt-2 px-1 border border-black w-fit"
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
                    <label htmlFor="word" className="pl-4">Search: </label>
                    <input type="text" id="word_search" name="word_search"
                           className="grow w-auto pl-1 mt-4 ml-2 mb-1 border border-black"
                           onChange={(e) => {
                               e.preventDefault();
                               setWord(e.target.value);
                           }}
                    />
                </div>

                <div className="flex flex-row justify-between w-full">
                    <span>&nbsp;</span>
                    <button className="ml-2 mt-2 px-1 border border-black w-fit"
                        onClick={e => {
                            e.preventDefault();

                            // getMockWords(explicit, word);
                            // getSampleWords(explicit, word);
                            getWords(explicit, LIMIT, word);

                        }}>Get words
                    </button>
                </div>
            </form>
        </div>
    );
}
