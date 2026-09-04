import type {Route} from "./+types/home";
import {TitleBar} from "~/components/TitleBar";
import {Box, Grid, Stack} from "@mui/material";
import {CloudSelector} from "~/components/CloudSelector";
import {CloudUI} from "~/components/CloudUI";
import {ResultsPane} from "~/components/ResultsPane";
import {type CloudRecord, getClouds} from "~/data/cloud_data";
import {useState} from "react";
import {Search} from "~/layouts/Search";
import {Results} from "~/components/Results";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "songsaurus"},
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
    // const[explicit, setExplicit] = useState<boolean>(false);

    const[trackResults, setTrackResults] = useState<[]>();

    return (
        <Box sx={{flexGrow: 1}} className="justify-between">
            <TitleBar/>
            <Stack direction="column" className="grow border-0 border-pink-400">
                <Grid container spacing={0}>
                    <Grid size={{xs: 12, sm: 12, md: 12, lg: 12, xl: 12}}>
                        <div className="text-center border-b-4 border-black">
                            <span className="text-xl">Songsaurus</span>, powered by Spotify
                        </div>
                    </Grid>
                    <Grid size={{xs: 12, sm: 12, md: 12, lg: 12, xl: 12}}>
                        <div className="border-b-0 border-black">
                            <Search clouds={clouds}
                                    cloud={cloud} setCloud={setCloud}/>
                        </div>
                    </Grid>
                    {/*<Grid size={{xs: 12, sm: 12, md: 8, lg: 8, xl: 8}}>*/}
                    {/*    <div className="border-b-0 border-black">*/}
                    {/*        /!*<CloudUI cloud={cloud}/>*!/*/}
                    {/*        /!*<ResultsStack results={trackResults}/>*!/*/}
                    {/*    </div>*/}
                    {/*</Grid>*/}
                </Grid>
            </Stack>
        </Box>
    )
}
