import {Grid, Stack} from "@mui/material";


export function HeaderRow({word}:{word:string}) {
    // console.log(`Word: ${word}`)

    return (
        <Grid direction="row" className="grow font-bold w-full px-0 pt-2 border-b border-black">
            <span className="pl-2">{word}</span>
        </Grid>
    );
}

