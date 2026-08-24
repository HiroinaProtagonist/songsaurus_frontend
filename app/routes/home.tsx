import type {Route} from "./+types/home";
import {TitleBar} from "~/components/TitleBar";
import {Box, Grid, Stack} from "@mui/material";
import {CloudSelector} from "~/components/CloudSelector";
import {CloudUI} from "~/components/CloudUI";
import {ResultsPane} from "~/components/ResultsPane";
import {type CloudRecord, getClouds} from "~/data/cloud_data";
import {useState} from "react";
import {Search} from "~/layouts/search";

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
            <Stack direction="column" className="grow border-6 border-green-400">


                <Grid container spacing={0}>
                    <Grid size={{xs: 12, sm: 12, md: 12, lg: 12, xl: 12}}>
                        <div className="text-center border-4 border-black">
                            <span className="text-xl">Spotiwords</span>, driven by Spotify
                        </div>
                    </Grid>
                    <Grid size={{xs: 12, sm: 12, md: 4, lg: 4, xl: 4}}>
                        <div className="border-4 border-black">
                            <Search clouds={clouds} cloud={cloud} setCloud={setCloud} />
                        </div>
                    </Grid>
                    <Grid size={{xs: 12, sm: 12, md: 8, lg: 8, xl: 8}}>
                        <div className="border-4 border-black">
                            <CloudUI cloud={cloud}/>
                        </div>
                    </Grid>

                </Grid>

                <Stack direction="row" className="h-3/4 grow border-4 border-blue-400">
                    <Search clouds={clouds} cloud={cloud} setCloud={setCloud} />
                    <CloudUI cloud={cloud}/>
                </Stack>

                {/*{res.map((r, i) => <ResultsPane data={r}/>)}*/}

            </Stack>
        </Box>
    )
}
