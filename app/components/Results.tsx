import {Box, Grid, Stack} from "@mui/material";
import {SongListRow} from "~/components/SongListRow";
import {HeaderRow} from "~/components/HeaderRow";

//results = {tracks=tracks, word=word}[]
export function Results({results}) {

    console.log(`${JSON.stringify(results[0].tracks)}`);

    return (
        <Box sx={{flexGrow: 1}}
             className="w-full mt-8 px-6 border-0 border-green-400">
            <Grid container spacing={2}
                  size={{xs:12, sm:12, md:12, lg:12, xl:12}}
                  className="pl-2"
            >

                {results.map((r, i: number) =>
                    <>
                        <HeaderRow word={r.word} key={i}/>
                        <SongListRow tracks={r.tracks} key={i*1000}/>
                    </>
                )}

            </Grid>
        </Box>
    );
}

