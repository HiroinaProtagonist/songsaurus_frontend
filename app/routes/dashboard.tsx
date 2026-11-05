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
            Dashboard
        </>
    );
}
