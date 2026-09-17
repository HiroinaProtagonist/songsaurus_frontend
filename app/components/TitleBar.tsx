import {Box, Stack} from "@mui/material";
import {Link} from "react-router";

export function TitleBar() {
    return (
        <Box id="top" sx={{ flexGrow: 1 }} className="">
            <Stack direction="row" className="justify-between mb-4">
                {/*<span className="text-xl">SPOTIWORDS</span>*/}
                <span>
                    <a href="/">Home</a>
                    {/*<Link to="/">Account</Link>*/}
                </span>
            </Stack>
        </Box>
    );
}