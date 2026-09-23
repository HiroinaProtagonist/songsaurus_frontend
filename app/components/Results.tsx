import {Box, Grid, Stack} from "@mui/material";
import {SongListRow} from "~/components/SongListRow";
import {HeaderRow} from "~/components/HeaderRow";

export function Results({results, loaded}) {
    return (
        <Box sx={{flexGrow: 1}}
             className="w-full mt-8 px-6 border-0 border-green-400">
            <Grid container spacing={2}
                  size={{xs:12, sm:12, md:12, lg:12, xl:12}}
                  className="pl-2"
            >

                {loaded && results &&
                    results.map((r, i: number) =>
                    <>
                        <HeaderRow word={r.word} key={"h" + i}/>
                        <SongListRow tracks={r.tracks.tracks} key={"s" + i}/>
                    </>
                )}

                {loaded && !results &&
                    <Grid direction="row" className="grow w-full px-0 pt-2">
                        <span className="pl-0">No results available</span>
                    </Grid>}

                {!loaded &&
                    <Grid direction="row" className="grow w-full px-0 pt-2">
                        <span className="pl-0"></span>
                    </Grid>}

            </Grid>
        </Box>
    );
}

