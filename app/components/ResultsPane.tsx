import {Divider, Grid, Stack} from "@mui/material";
import {MusicResult} from "~/components/MusicResult";

export function ResultsPane({musicResData}:any) {
    return (
        <Grid className="border border-blue-600">
            <Stack direction ="row"
               divider={<Divider orientation="vertical" flexItem />}
               spacing={2}
            >
                <MusicResult  />
            </Stack>
        </Grid>
    );
}