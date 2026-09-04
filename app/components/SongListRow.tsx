import {TrackCard} from "~/components/TrackCard";
import {Box, Grid, Stack} from "@mui/material";

export function SongListRow({tracks}) {
    console.log(`Tracks: ${JSON.stringify(tracks)}`);

    //TODO add grid sizing
    return (
        <>

            <Stack direction="row" spacing={2} className="pl-2 border-0 border-purple-400">

            {tracks.map((t, i: number) =>
                <TrackCard track={t} key={i*500}/>
            )}

            </Stack>
        </>
    );
}

