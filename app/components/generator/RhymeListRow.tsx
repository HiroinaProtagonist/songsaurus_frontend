import {Grid} from "@mui/material";
import {AddCloudWordTag} from "~/components/AddCloudWordTag";

export function RhymeListRow({rhymes, allRhymes}) {
    console.log(`RhymeListRow payload: ${JSON.stringify(Object.keys(allRhymes))}`);

    //TODO add grid sizing
    return (
        <Grid container spacing={1} className="pl-2 border-0 border-purple-400">
            {allRhymes &&
                Object.keys(allRhymes).map((row, i) =>
                    allRhymes[row].map((word) =>
                        <>
                            <AddCloudWordTag word={word} key={`${word}_${i}`}/>
                        </>
                    ))}
        </Grid>
    );
}
