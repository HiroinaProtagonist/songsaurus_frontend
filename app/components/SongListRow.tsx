import {TrackCard} from "~/components/TrackCard";
import {Box, Grid, Stack} from "@mui/material";

export function SongListRow({tracks}) {
    console.log(`Tracks in songlistrow: ${JSON.stringify(tracks)}`);

    //TODO add grid sizing
    return (
        <>
            <Stack direction="row" spacing={2} className="pl-2 border-0 border-purple-400">

            {tracks !== undefined &&
                tracks !== null &&
                tracks.items.map((t) =>
                <TrackCard track={t} key={t.id}/>
            )}

            </Stack>
        </>
    );
}

