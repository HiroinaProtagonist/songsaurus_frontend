import type {Route} from "./+types/home";
import {TitleBar} from "~/components/TitleBar";
import {Box, Stack} from "@mui/material";
import {CloudSelector} from "~/components/CloudSelector";
import {CloudUI} from "~/components/CloudUI";
import {ResultsPane} from "~/components/ResultsPane";
import {type CloudRecord, getClouds} from "~/data/cloud_data";
import {useState} from "react";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "spotiwords"},
        {name: "description", content: "Search Spotify by word association"},
    ];
}

export async function clientLoader() {
    const clouds:CloudRecord[] = await getClouds();

    // console.log(clouds);
    return { clouds };
}

export default function Home({ loaderData, }:Route.ComponentProps) {
    const { clouds } = loaderData;

    const[cloud, setCloud] = useState<string>();

    return (
        <Box sx={{flexGrow: 1}} className="justify-between">
            <TitleBar/>
            <Stack direction="column" className="justify-between">

                <Stack direction="row" className="h-3/4">
                    <CloudSelector clouds={clouds} cloud={cloud} setCloud={setCloud} />
                    <CloudUI cloud={cloud}/>
                </Stack>

                {/*{res.map((r, i) => <ResultsPane data={r}/>)}*/}


            </Stack>
        </Box>
    )
}
