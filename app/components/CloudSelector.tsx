import {
    type CloudRecord,
    type ElementType,
    type reactWordCloud, stringToStringArray,
    stringToWordCloudArray
} from "~/data/cloud_data";
import {MdDelete, MdEdit} from "react-icons/md";
import {useRef, useState} from "react";
import {sample} from "~/data/sample_tracks";
import axios from "axios";
import type {Game} from "~/model/game";
import type {Tracks} from "~/model/tracks";
import {ResultToTracks} from "~/data/ItemToTrack";

export function CloudSelector({loaded, setLoaded,
                               clouds,
                               cloud, setCloud,
                               explicit, setExplicit,
                               results, setResults
                              }:any){

    const explicitCheckRef = useRef(null);
    const [error, setError] = useState<string>();
    const LIMIT:string = "10";

    // console.log(`Explicit initial: ${explicit}`);

    function getSampleTracks(explicit:boolean, cloud:string) {
        console.log(`Explicit: ${explicit}; Cloud: ${cloud}`)
        setResults(sample);
        setLoaded(true);
    }

    const getTracks = async (explicit:boolean, limit:string, cloud:string[]) => {
        console.log(`Searching for tracks for cloud: ${JSON.stringify(cloud)}`);
        axios
            .get<Tracks[]>(`/songsaurus/multi/${limit}/${cloud}`)
            // .get<Game[]>(`/games/${cloud}/${limit}`)
            .then((res) => {
                setResults(res.data);
                setLoaded(true);
                setError("");
                // console.log(`Results from api: ${results}`);
            })
            .catch((err) => {
                setError(err.message);
                setLoaded(true);
            });
    };

    return (
        <div className="p-2 border-0 border-purple-600">
            <form>
                <span className="border-0">
                    <label htmlFor="cloudSelect" className="pl-4">Cloud:</label>
                    <select name="cloudSelect" id="cloudSelect"
                        className="ml-2 px-1 border border-black"
                        onChange={e => {
                            setCloud(stringToStringArray(e.target.value));
                            // setCloud(e.target.value);
                        }}
                    >
                        <option value='' key='0'>Choose cloud</option>
                        {clouds.map((cloud:CloudRecord) =>
                            <option value={cloud.elements} key={cloud.id} >{cloud.title}</option>
                        )}
                    </select>

                    <span className="mt-1 pt-1 align-text-top text-xl">
                        <button className="ml-2 font-bold"
                            onClick={e => {
                                e.preventDefault();
                                console.log(`cloud edit: ${JSON.stringify(cloud)}`);
                                // navigate
                            }}
                        >
                            <MdEdit/>
                        </button>
                    </span>

                    <span className="mt-1 pt-1 align-text-top text-xl">
                        <button className="ml-2 font-bold"
                            onClick={e => {
                                e.preventDefault();
                                console.log(`cloud del: `)
                                console.log(cloud);
                                // navigate
                            }}
                        >
                            <MdDelete/>
                        </button>
                    </span>
                </span>

                <div className="">
                    <label className="ml-2 pl-2">Include explicit songs</label>
                    <input className="ml-2 pl-2" ref={explicitCheckRef} type="checkbox" id="explicit"
                           name="explicit" defaultChecked={explicit}
                           onChange={e => {
                               e.stopPropagation();
                               setExplicit(!explicit);
                               // console.log(`Explicit: ${explicit}`);
                           }}
                    />
                </div>

                <button className="px-1 mt-2 ml-28 border border-black w-fit"
                    onClick={e => {
                        e.preventDefault();
                        getSampleTracks(explicit, cloud);
                        // getTracks(explicit, LIMIT, cloud);
                }}>Get songs</button>
            </form>
        </div>
    );
}