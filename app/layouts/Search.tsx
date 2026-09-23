import {CloudSelector} from "~/components/CloudSelector";
import {useEffect, useState} from "react";
import {Grid, Stack} from "@mui/material";
import {Results} from "~/components/Results";
import { sample } from "~/data/sample_tracks";
import {CloudDisplay} from "~/components/CloudDisplay";

export function Search({clouds}: any) {

    const [loaded, setLoaded] = useState<Boolean>(false);
    const[explicit, setExplicit] = useState<boolean>(false);
    const [results, setResults] = useState<any>();
    const [cloud, setCloud] = useState<any>();

    return (
        <Grid container spacing={1} size={12}>
            <Grid size="auto">
                <CloudSelector loaded={loaded} setLoaded={setLoaded}
                               clouds={clouds}
                               cloud={cloud} setCloud={setCloud}
                               explicit={explicit} setExplicit={setExplicit}
                               setResults={setResults} />
            </Grid>

            <Grid size={{xs: 12, sm: 6, md: 6, lg: 6, xl: 6}}>
                <CloudDisplay loaded={loaded} cloud={cloud} />
            </Grid>

            { loaded &&
                <Grid size={{xs: 12, sm: 12, md: 12, lg: 12, xl: 12}}>
                    <Results results={results} loaded={loaded} />
                </Grid>
            }
        </Grid>
    )
}