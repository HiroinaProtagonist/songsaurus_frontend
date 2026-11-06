import { useState } from "react";
import {Card, CardContent, CardHeader} from "@mui/material";
import {safeNextPath} from "~/utils/safe-next-path";
import {supabase} from "~/db/supabase";
import {useSession} from "~/context/SessionContext";
import {Navigate} from "react-router";

export default function Login({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
    const { session } = useSession();
    // const [status, setStatus] = useState("");

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    if (session) { return <Navigate to="/" />; }

    async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            const next = new URLSearchParams(window.location.search).get('next');
            location.href = safeNextPath(next, '/dashboard');

        } catch (error) {
            // setError(error instanceof Error ? error.message : 'An error occurred');
            console.log(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        // <main style={{padding: '2rem'}}>
        <div className="flex flex-row justify-center mt-16 w-full" {...props}>
            <Card>
                <div>
                    <div className="font-medium text-lg tracking-normal">Sign in</div>
                    <div>Enter your email below to sign in to your account</div>
                </div>
                <CardContent>
                    <form onSubmit={handleLogin}>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <label htmlFor="email">Email</label>
                                <input id="email"
                                       type="email"
                                       placeholder="email@example.com"
                                       required
                                       value={email}
                                       onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <label htmlFor="password">Password</label>
                                    <a
                                        href="/forgot-password"
                                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                    >
                                        Forgot your password?
                                    </a>
                                </div>
                                <input
                                    id="password"
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            {error && <p className="text-sm text-red-500">{error}</p>}
                            <button type="submit" className="w-full" disabled={isLoading}>
                                {isLoading ? 'Signing in...' : 'Sign in'}
                            </button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Don't have an account?{' '}
                            <a href="/signup" className="underline underline-offset-4">
                                Sign up
                            </a>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
        // </main>
    )
}