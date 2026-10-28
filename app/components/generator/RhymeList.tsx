import {Grid} from "@mui/material";
import {AddCloudWordTag} from "~/components/AddCloudWordTag";
import {RhymeListRow} from "~/components/generator/RhymeListRow";


export function RhymeList({rhymes, allRhymes}) {
    console.log(`RhymeList payload: ${JSON.stringify(Object.entries(allRhymes))}`);

    //TODO add grid sizing
    return (
        <Grid container spacing={1} className="pl-2 border-0 border-purple-400">
            {allRhymes &&
                Object.entries(allRhymes).map((entry) =>
                entry[0] == "300" &&
                    <>
                        <div className="w-full border-b border-black border-dashed mt-4">Perfect Rhymes: </div>
                        <div className="border-b border-dashed border-b-red-500 w-full pb-1 mb-2">
                             <RhymeListRow row={entry[1]} />
                        </div>
                    </>
                )
            }
        </Grid>
    );
}
