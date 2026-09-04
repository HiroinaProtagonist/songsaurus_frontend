import {CloudSelector} from "~/components/CloudSelector";
import {useEffect, useState} from "react";
import {Stack} from "@mui/material";
import {Results} from "~/components/Results";
import { sample } from "~/data/sample_tracks";

export function Search({clouds, cloud, setCloud}: any) {

    const [loaded, setLoaded] = useState<Boolean>(false);
    // const [cloud, setCloud] = useState<any>();
    const[explicit, setExplicit] = useState<boolean>(false);
    const [results, setResults] = useState<any>();

    //TODO get results for cloud from Spotify
    console.log(
        `
        Explicit: ${explicit}; 
        Cloud: ${JSON.stringify(cloud)}; 
        Loaded: ${loaded}; 
        Results: ${JSON.stringify(results)}`);

    return (
        <Stack direction="column">
            <CloudSelector loaded={loaded} setLoaded={setLoaded}
                           clouds={clouds}
                           cloud={cloud} setCloud={setCloud}
                           explicit={explicit} setExplicit={setExplicit}
                           results={results} setResults={setResults} />

            { loaded && <Results results={results} /> }
        </Stack>
    )
}