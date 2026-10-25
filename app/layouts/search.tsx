import {CloudSelector} from "~/components/search/CloudSelector";
import {useEffect, useState} from "react";
import {Box, Grid, Stack} from "@mui/material";
import {Results} from "~/components/Results";
import { sample } from "~/data/sample_tracks";
import {CloudDisplay} from "~/components/common/CloudDisplay";

export function Search({clouds}: any) {

    const [loaded, setLoaded] = useState<Boolean>(false);
    const[explicit, setExplicit] = useState<boolean>(false);
    const [results, setResults] = useState<any>();
    const [cloud_id, setCloudId] = useState<string>();
    const [cloud, setCloud] = useState<any>();

    useEffect(()=> {
        setCloud(() => clouds.filter(c => c.cloud_id === cloud_id)[0]);
    }, [clouds, cloud, cloud_id]);

    // console.log(`Search: ${JSON.stringify({cloud}.cloud)}`);

    return (
        <Grid container spacing={1} className="border-0 border-pink-700">
            <Stack direction="row" spacing={0} className="shrink mt-6 border-0 border-green-700">
                <Box className="grow-0 shrink-0 ml-3 mr-3 mb-3 border-0 border-purple-700">
                    <CloudSelector loaded={loaded} setLoaded={setLoaded}
                                   clouds={clouds}
                                   cloud={cloud} setCloud={setCloud}
                                   cloud_id={cloud_id} setCloudId={setCloudId}
                                   explicit={explicit} setExplicit={setExplicit}
                                   setResults={setResults} />
                </Box>
                <Box className="w-full grow shrink border-0 border-lime-400">
                    <CloudDisplay loaded={loaded} cloud_id={cloud_id} cloud={cloud} clouds={clouds}/>
                </Box>
            </Stack>

            <Grid container size={12} spacing={1} className="pl-2 pt-2 border-0 border-black w-full">
                {results && <Results results={results} explicit={explicit} />}
                {!results && <p className="pt-4 px-0 border-b-1 border-black grow">Search for results</p>}
            </Grid>
        </Grid>
    )
}
