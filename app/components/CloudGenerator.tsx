import {
    type CloudRecord,
    type ElementType,
    type reactWordCloud,
    stringToWordCloudArray,
    stringToStringArray
} from "~/data/cloud_data";
import {useRef, useState} from "react";
import {sample} from "../data/sample_words";
import axios from "axios";
// import type {Words} from "~/model/words";

export function CloudGenerator({setLoaded,
                               clouds,
                               cloud, setCloud,
                               word, setWord,
                               explicit, setExplicit,
                               setResults
                              }:any){

    const explicitCheckRef = useRef(null);
    const typesCheckRef = useRef(null);

    const[synonyms, setSynonyms] = useState<boolean>(false);
    const[antonyms, setAntonyms] = useState<boolean>(false);
    const[rhyming, setRhyming] = useState<boolean>(false);

    const[newCloudName, setNewCloudName] = useState<string>("");

    const [error, setError] = useState<string>();
    const LIMIT:string = "10";

    function getSampleWords(explicit:boolean, word:string[]) {
        console.log(`Load sample for word: ${word},
            ${explicit ? "not" : ""} including explicit words`)
        setResults(sample);
        setLoaded(true);
    }

    const getWords =
        async (explicit:boolean, limit:string, words:string[]) => {
        console.log(`Searching for tracks for cloud: ${JSON.stringify(cloud)}`);
    //     axios
    //         .get<Words[]>(`/thesaurus/multi/${limit}/${words}`)
    //         // .get<Game[]>(`/games/${cloud}/${limit}`)
    //         .then((res) => {
    //             setResults(res.data);
    //             setLoaded(true);
    //             setError("");
    //             // console.log(`Results from api: ${results}`);
    //         })
    //         .catch((err) => {
    //             setError(err.message);
    //             setLoaded(true);
    //         });
    };

    return (
        <div className="p-3 border-0 border-purple-600">
            <form>
                <span className="border-0">
                    <label htmlFor="cloudSelect" className="pl-4">Cloud:</label>
                    <select name="cloudSelect" id="cloudSelect"
                        className="ml-2 px-1 border border-black"
                        onChange={e => {
                            setCloud(stringToStringArray(e.target.value));
                            setLoaded(false);
                        }}
                    >
                        <option value='' disabled={true} selected key='choose_cloud'>Choose cloud</option>
                        <option value={"new_cloudd"} key={"new_cloud"} >Add new cloud</option>
                        {clouds.map((cloud:CloudRecord) =>
                            <option value={cloud.elements} key={cloud.id} >{cloud.title}</option>
                        )}
                    </select>
                </span>

                {!cloud || (cloud && cloud[0] != "new_cloud") &&
                    <div className="mb-18.5">&nbsp;</div>
                }

                <div>
                    {cloud && cloud[0] == "new_cloud" &&
                    <>
                        <form>
                            <div className="mt-2">
                                <label htmlFor="new_cloud_input" className="pl-4">Name: </label>
                                <input type="text" id="new_cloud_name" className="ml-1 border border-black w-35"/>
                            </div>
                            <div>
                                <button className="px-1 mt-4 ml-32 border border-black w-fit"
                                    onClick={e => {
                                        e.preventDefault();
                                        getSampleWords(explicit, word);
                                        // getTracks(explicit, LIMIT, cloud);
                                        setCloud(e);
                                        setLoaded(false);
                                    }}>Add cloud</button>
                            </div>
                        </form>
                    </>}
                </div>

                <div className="mb-4 mt-6">
                    <label className="ml-2 pl-2">Include explicit words</label>
                    <input className="ml-2 pl-2" ref={explicitCheckRef} type="checkbox" id="explicit"
                           name="explicit" defaultChecked={explicit}
                           onChange={e => {
                               e.stopPropagation();
                               setExplicit(!explicit);
                               // console.log(`Explicit: ${explicit}`);
                           }}
                    />
                </div>

                <div className="mb-4">
                    <div>
                        <label className="ml-2 pl-2">Type of words to include: </label>
                    </div>

                    <div>
                        <label htmlFor="synonyms" className="ml-2 pl-2">Synonyms: </label>
                        <input className="ml-2 pl-2" ref={typesCheckRef} type="checkbox" id="types"
                           name="synonyms" defaultChecked={synonyms}
                           onChange={e => {
                               e.stopPropagation();
                               setSynonyms(!synonyms);
                           }}
                        />
                    </div>

                    <div>
                        <label htmlFor="antonyms" className="ml-2 pl-2">Antonyms: </label>
                        <input className="ml-2 pl-2" ref={typesCheckRef} type="checkbox" id="types"
                           name="antonyms" defaultChecked={antonyms}
                           onChange={e => {
                               e.stopPropagation();
                               setAntonyms(!antonyms);
                           }}
                        />
                    </div>

                    <div>
                        <label htmlFor="rhyming" className="ml-2 pl-2">Rhyming Words: </label>
                        <input className="ml-2 pl-2" ref={typesCheckRef} type="checkbox" id="types"
                               name="rhyming" defaultChecked={rhyming}
                               onChange={e => {
                                   e.stopPropagation();
                                   setRhyming(!rhyming);
                               }}
                        />
                    </div>
                </div>

                <button className="px-1 mt-2 ml-28 border border-black w-fit"
                    onClick={e => {
                        e.preventDefault();
                        getSampleWords(explicit, word);
                        // getTracks(explicit, LIMIT, cloud);
                        setLoaded(true);
                }}>Get words</button>
            </form>
        </div>
    );
}
