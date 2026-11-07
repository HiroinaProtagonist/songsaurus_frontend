import {useRef, useState} from "react";
import {sample} from "~/data/sample_tracks";
import axios from "axios";
import type {Tracks} from "~/model/tracks";

export function CloudSelector({setLoaded,
    clouds,
    cloud, setCloud,
    cloud_id, setCloudId,
    explicit, setExplicit,
    setResults
  }:any
  // ,{loaderData}: Route.ComponentProps
){

    const explicitCheckRef = useRef(null);
    const [error, setError] = useState<string>();
    const LIMIT:string = "10";

    // console.log(`Explicit initial: ${explicit}`);
    // console.log(`Selector clouds: ${JSON.stringify(clouds)}`);
    // console.log(clouds.filter(cloud => cloud.cloud_id === cloud_id));

    function getSampleTracks(explicit:boolean, cloud) {
        console.log(`Load sample for cloud: ${cloud.words} with explicit: ${explicit}`)
        setResults(sample);
        setLoaded(true);
    }

    const getTracks =
        async (explicit:boolean, limit:string, cloud) => {

        //TODO modify mock data to reflect updated live
        const searchArray = cloud.words.map(c => c.name);
        console.log(`Searching for tracks for cloud select: ${JSON.stringify(searchArray)}`);

        axios
            .get<Tracks[]>(`/songsaurus/multi/${limit}/${searchArray}`)
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
        <div className="w-fit pr-2 pb-1 mt-0 border-0 border-purple-400">
            <form>
                <span className="border-0">
                    <label htmlFor="cloudSelect" className="pl-2">Cloud:</label>
                    <select name="cloudSelect" id="cloudSelect"
                        className="ml-2 pl-2 pr-1
                                   border border-black
                                   max-w-60 whitespace-normal text-ellipsis
                                  "
                        defaultValue='default'
                        onChange={e => {
                            console.log(`Value: ${e.target.value}`)
                            setCloudId(e.target.value);
                            setLoaded(false);
                            setResults(null);
                        }}
                    >
                        <option value='default' disabled={true} key='0'>Choose cloud</option>
                        {clouds.map((cloud) =>
                            <option value={cloud.cloud_id} key={cloud.cloud_id} >{cloud.title}</option>
                        )}
                    </select>
                </span>

                <div className="">
                    <label className="ml-2">Include explicit songs</label>
                    <input className="ml-3 pl-2 align-middle" ref={explicitCheckRef} type="checkbox" id="explicit"
                           name="explicit" defaultChecked={explicit}
                           onChange={e => {
                               e.stopPropagation();
                               setExplicit(!explicit);
                               // console.log(`Explicit: ${explicit}`);
                           }}
                    />
                </div>

                <div className="flex flex-row justify-between w-full">
                    <span>&nbsp;</span>
                    <button className="ml-2 mt-2 px-1 border border-black w-fit"
                        onClick={e => {
                            e.preventDefault();
                            console.log(`Cloud for tracks: ${cloud === undefined}`);
                            // getSampleTracks(explicit, cloud);

                            getTracks(explicit, LIMIT, cloud);

                            // setLoaded(true);
                    }}>Get songs</button>
                </div>
            </form>
        </div>
    );
}
