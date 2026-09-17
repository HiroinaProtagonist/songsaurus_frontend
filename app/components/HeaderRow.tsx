import {Grid, Stack} from "@mui/material";
import {Link} from "react-router";


export function HeaderRow({word}:{word:string}) {
    // console.log(`Word: ${word}`)

    return (
        <Grid direction="row" className="grow flex flex-row justify-between w-full px-0 pt-2 border-b border-black">
            <span id={word} className="font-bold pl-2">{word}</span>
            <span><Link to="#top">Top</Link></span>
        </Grid>
    );
}

