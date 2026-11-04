import {Grid} from "@mui/material";
import {AddCloudWordTag} from "~/components/misc/AddCloudWordTag";
import {WordListRow} from "~/components/generator/WordListRow";

export function WordList({words, headerWord}) {
    // console.log(`WordList payload: ${JSON.stringify(words)}`);

    //TODO add grid sizing
    return (
        <Grid container spacing={1} className="pl-2 border-0 border-purple-400">
            {words && words.length > 0 &&
                words.map((row, i) =>
                    <div className="border-b border-dashed border-b-red-500 w-full pb-1 mb-2">
                        <WordListRow row={row}/>
                    </div>
                )
            }

            {words.length < 1 && headerWord &&
                <div className="mt-2 w-full">No {headerWord.toLowerCase()} available.</div>
            }
        </Grid>
    );
}