import { useState } from 'react'
import {Box, Button, Card, CardContent, CardHeader, Stack} from "@mui/material";
import {supabase} from "~/db/supabase";
import {useAuth} from "~/context/AuthContext";
import {useLocation, useNavigate} from "react-router";
import {TitleBar} from "~/components/page/TitleBar";
import {FooterBar} from "~/components/page/FooterBar";

export function Login({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
    const { pSignin } = useAuth();
    const nav = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            await pSignin(email, password);

            const from = location.state?.from || "/dashboard";
            nav(from, { replace: true });
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <Box sx={{flexGrow: 1}} className="flex flex-col justify-between border-0 border-pink-600">
                <Stack direction="column" className="p-2 grow border-0 border-orange-400">
                    <TitleBar/>
                    <div className="border-b-0 border-black">
        <div className="flex flex-row justify-center mt-16 w-full" {...props}>
            <Card>
                <CardHeader>
                    <div className="font-medium text-lg tracking-normal">Sign in</div>
                    <div>Enter your email below to sign in to your account</div>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin}>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
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
                    </div>
                </Stack>
                <FooterBar/>
            </Box>
        </>
    )
}
