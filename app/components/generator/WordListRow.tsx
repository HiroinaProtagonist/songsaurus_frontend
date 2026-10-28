import {TrackCard} from "~/components/TrackCard";
import {Box, Grid, Stack} from "@mui/material";
import {EmbedTrackCard} from "~/components/EmbedTrackCard";
import {AddCloudWordTag} from "~/components/AddCloudWordTag";

export function WordListRow({words}) {
    // console.log(`WordListRow payload: ${JSON.stringify(words)}`);

    //TODO add grid sizing
    return (
        <Grid container spacing={1} className="pl-2 border-0 border-purple-400">
            {words &&
                words.map((row, i) =>
                    row.map((word) =>
                    <AddCloudWordTag word={word} key={`${word}_${i}`}/>
                ))}
        </Grid>
    );
}
