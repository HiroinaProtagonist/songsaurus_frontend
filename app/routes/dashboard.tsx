import {TitleBar} from "~/components/page/TitleBar";
import {Box, Stack} from "@mui/material";
import {FooterBar} from "~/components/page/FooterBar";
import {DashboardComponent} from "~/components/login_old/DashboardComponent";
import {useAuth} from "~/context/AuthContext";
import {Navigate, useLocation} from "react-router";

export default function Dashboard() {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div>Loading...</div>
    }

    if (!user) {
        return (
            <Navigate
                to="/login"
                replace
                state={{ from: location.pathname }}
            />
        );
    }

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
    );
}
