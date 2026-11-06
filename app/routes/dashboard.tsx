import {Navigate, useLocation} from "react-router";
import {useSession} from "~/context/SessionContext";

export default function Dashboard() {
    const { session } = useSession();

    if (!session) {
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

            {session && <p>Logged in.</p>}
        </>
    );
}
