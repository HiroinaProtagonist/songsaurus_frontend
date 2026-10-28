import {Grid} from "@mui/material";
import {AddCloudWordTag} from "~/components/AddCloudWordTag";
import {RhymeListRow} from "~/components/generator/RhymeListRow";


export function RhymeList({rhymes, allRhymes}) {
    console.log(`RhymeListRow payload: ${JSON.stringify(Object.keys(allRhymes))}`);

    //TODO add grid sizing
    return (
        <Grid container spacing={1} className="pl-2 border-0 border-purple-400">
            {allRhymes &&
                Object.keys(allRhymes).map((key, row, i) =>
                    <>{key}: <RhymeListRow rhymes={rhymes} allRhymes={allRhymes} /><br/><br/><br/></>
                )}
        </Grid>
    );
}
