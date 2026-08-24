import {Box, Stack} from "@mui/material";
import {Link} from "react-router";

export function TitleBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Stack direction="row" className="justify-between mb-4">
                {/*<span className="text-xl">SPOTIWORDS</span>*/}
                <span>
                    <Link to="/">Home</Link>
                    {/*<Link to="/">Account</Link>*/}
                </span>
            </Stack>
        </Box>
    );
}