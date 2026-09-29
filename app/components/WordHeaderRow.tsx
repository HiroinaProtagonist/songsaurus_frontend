import {Grid, Stack} from "@mui/material";
import {Link} from "react-router";
import {WordHeaderRowWord} from "~/components/WordHeaderRowWord";


export function WordHeaderRow({wordType, headerWords}) {
    console.log(`WordHeaderRow: ${wordType}`);

    return (
        <Grid direction="row"
              className="grow flex flex-row justify-between w-full
                        px-0 pt-4
                        border-b border-black">
            <div id={wordType}>
            {headerWords.map((h) =>
                <span>
                    <WordHeaderRowWord highlight={wordType} headerWord={h} />
                </span>
            )}
            </div>

            <span><Link to="#top">Top</Link></span>
        </Grid>
    );
}
