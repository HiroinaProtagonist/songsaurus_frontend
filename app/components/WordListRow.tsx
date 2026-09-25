import {TrackCard} from "~/components/TrackCard";
import {Box, Grid, Stack} from "@mui/material";
import {EmbedTrackCard} from "~/components/EmbedTrackCard";
import {AddCloudWordTag} from "~/components/AddCloudWordTag";

export function WordListRow({tracks}) {
    // console.log(`Tracks in songlistrow: ${JSON.stringify(tracks)}`);

    //TODO add grid sizing
    return (
        <>
            <Grid container spacing={1} className="pl-2 border-0 border-purple-400">

                {tracks &&
                    tracks.items
                        .map((w) =>
                        <AddCloudWordTag word={w} key={w.id}/>
                    )}

            </Grid>
        </>
    );
}

