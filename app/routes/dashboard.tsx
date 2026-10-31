import {TitleBar} from "~/components/page/TitleBar";
import {Box, Stack} from "@mui/material";
import {FooterBar} from "~/components/page/FooterBar";
import {SocialLoginComponent} from "~/components/login/SocialLoginComponent";
import {DashboardComponent} from "~/components/login/DashboardComponent";

export default function Dashboard() {
    return (
        <>
            <Box sx={{flexGrow: 1}} className="flex flex-col justify-between border-0 border-pink-600">
                <Stack direction="column" className="p-2 grow border-0 border-orange-400">
                    <TitleBar/>
                    <div className="border-b-0 border-black">
                        <DashboardComponent/>
                    </div>
                </Stack>
                <FooterBar/>
            </Box>
        </>
    )
}
