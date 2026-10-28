import {TrackCard} from "~/components/TrackCard";
import {Box, Grid, Stack} from "@mui/material";
import {EmbedTrackCard} from "~/components/EmbedTrackCard";
import {AddCloudWordTag} from "~/components/AddCloudWordTag";

export function WordListRow({row}) {
    console.log(`WordListRow payload: ${JSON.stringify(row)}`);

    //TODO add grid sizing
    return (
        <Grid container spacing={1} className="pl-2 border-0 border-purple-400">
            {row && row.length > 0 &&
                row.map((word, i) =>
                    <AddCloudWordTag word={word} key={`${word}_${i}`}/>
                )}
        </Grid>
    );
}
