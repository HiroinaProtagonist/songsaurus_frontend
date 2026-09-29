import type {Route} from "./+types/home";
import {TitleBar} from "~/components/TitleBar";
import {Box, Stack} from "@mui/material";
import {type CloudRecord, getClouds} from "~/data/cloud_data";
import {Search} from "~/layouts/search";
import {FooterBar} from "~/components/FooterBar";

export async function clientLoader() {
    const clouds:CloudRecord[] = await getClouds();

    // console.log(clouds);
    return { clouds };
}

export default function Home({ loaderData, }:Route.ComponentProps) {
    const { clouds } = loaderData;

    return (
        <>
            <Box sx={{flexGrow: 1}} className="flex flex-col justify-between border-0 border-pink-600">
                <Stack direction="column" className="p-2 grow border-0 border-orange-400">
                    <TitleBar/>
                    <div className="border-b-0 border-black">
                        <Search clouds={clouds}/>
                    </div>
                </Stack>
                <FooterBar/>
            </Box>
        </>
    )
}
