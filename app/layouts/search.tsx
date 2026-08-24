import {CloudSelector} from "~/components/CloudSelector";
import {Stack} from "@mui/material";


export function Search({clouds, cloud, setCloud}) {
    return (
        <Stack direction="column">
            <form>
                <div>
                    <CloudSelector clouds={clouds} cloud={cloud} setCloud={setCloud} />
                    <label></label>
                    <input type="text"/>
                </div>
            </form>
        </Stack>
    )
}