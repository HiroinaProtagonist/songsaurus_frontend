import {Grid} from "@mui/material";
import {AddCloudWordTag} from "~/components/AddCloudWordTag";

export function RhymeListRow({row}) {
    // console.log(`RhymeListRow payload: ${JSON.stringify(row)}`);

    //TODO add grid sizing
    return (
        <Grid container spacing={1} className="pl-2 border-0 border-purple-400">
            {row && row.map((word, i) =>
                <AddCloudWordTag word={word} key={`${word}_${i}`}/>
            )}

            {!row && <div>No rhyming words available.</div>}
        </Grid>
    );
}
