import {TitleBar} from "~/components/page/TitleBar";
import {Box, Grid, Stack} from "@mui/material";
import {type CloudRecord, getClouds} from "~/data/cloud_data";
import {useState} from "react";
import {Search} from "~/layouts/search";
import {FooterBar} from "~/components/page/FooterBar";
import type {Route} from "../../.react-router/types/app/routes/+types/home";
import {WordSearch} from "~/layouts/wordSearch";
import {getDBClouds, getWords} from "~/db/supabase";

export async function clientLoader() {
    //TODO add feature flag to switch between mock and live data
    // const clouds:CloudRecord[] = await getClouds();

    const clouds = await getDBClouds();
    // const words = await getWords();

    // console.log(JSON.stringify(clouds));
    // return { clouds, words };

    return { clouds };
}

export default function Generator({ loaderData, }:Route.ComponentProps) {
    const { clouds } = loaderData;

    // console.log(`Clouds: ${JSON.stringify(clouds)}`);

    return (
        <>
            <Box sx={{flexGrow: 1}} className="flex flex-col justify-between border-0 border-pink-600">
                <Stack direction="column" className="p-2 grow border-0 border-orange-400">
                    <TitleBar/>
                    <div className="border-b-0 border-black">
                        <WordSearch clouds={clouds}/>
                    </div>
                </Stack>
                <FooterBar/>
            </Box>

        </>
    )
}
