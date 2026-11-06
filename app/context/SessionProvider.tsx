import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import {supabase} from "~/db/supabase";
import {SessionContext} from "~/context/SessionContext";
import LoadingPage from "~/components/LoadingPage";

type Props = { children: React.ReactNode };
export const SessionProvider = ({ children }: Props) => {
    const [session, setSession] = useState<Session | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const authStateListener = supabase.auth.onAuthStateChange(
            (_, session) => {
                setSession(session);
                setIsLoading(false);
            }
        );

        return () => {
            authStateListener.data.subscription.unsubscribe();
        };
    }, []);

    return (
        <SessionContext value={{ session }}>
            {isLoading ? <LoadingPage /> : children}
        </SessionContext>
    );
};