import type {Route} from "./+types/home";
import {TitleBar} from "~/components/page/TitleBar";
import {Box, Stack} from "@mui/material";
import {Search} from "~/routes/search";
import {FooterBar} from "~/components/page/FooterBar";
import {getCloudsWords, getDBClouds, getWords} from "~/db/supabase";

//TODO implement loader for preloading

// export async function loader({}: Route.LoaderArgs) {
//     const clouds = await getDBClouds();
//     const words = await getWords();
//
//     return { clouds, words };
// }

export async function clientLoader() {
    //TODO add feature flag to switch between mock and live data
    // const clouds:CloudRecord[] = await getClouds();

    const clouds = await getDBClouds();
    // const words = await getWords();

    // console.log(JSON.stringify(clouds));
    // return { clouds, words };

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
