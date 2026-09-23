import {TrackCard} from "~/components/TrackCard";
import {Box, Grid, Stack} from "@mui/material";
import {EmbedTrackCard} from "~/components/EmbedTrackCard";

export function SongListRow({tracks, explicit}) {
    // console.log(`Tracks in songlistrow: ${JSON.stringify(tracks)}`);

    //TODO add grid sizing
    return (
        <>
            <Grid container spacing={0} className="pl-2 border-0 border-purple-400">

                {tracks !== undefined &&
                    tracks !== null &&
                    tracks.items
                        .filter((t) =>
                            !explicit ? !t.explicit : (t.explicit || !t.explicit))
                        .map((t) =>
                        <EmbedTrackCard track={t} key={t.id}/>
                    )}



            </Grid>
        </>
    );
}

