    import { useState } from 'react';
    import {Button, Card, CardContent, CardHeader} from "@mui/material";
    import {supabase} from "~/db/supabase";
    import {useSession} from "~/context/SessionContext";

    export default function Signup({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
        const { session } = useSession();
        const [isLoading, setIsLoading] = useState(false);

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [repeatPassword, setRepeatPassword] = useState('');

        const [error, setError] = useState<string | null>(null);

        // const [loggedIn, setSuccess] = useState(false);

        const handleSignUp = async (e) => {
            e.preventDefault();
            setError(null);
            setIsLoading(true);

            if (password !== repeatPassword) {
                setError('Passwords do not match');
                // return;
            }

            try {
                const { error } = await supabase.auth.signUp({
                    email,
                    password,
                });

            } catch (error) {
                // setError(error instanceof Error ? error.message : 'An error occurred');
                console.log(error.message);

            } finally {
                setIsLoading(false);
            }
        }

        return (
            <div className="flex flex-row justify-center mt-16 w-full" {...props}>
                {!isLoading && session ? (
                    <Card>
                        <div>
                            {/*<CardHeader className="font-medium text-lg tracking-normal">*/}
                            {/*    Thank you for signing up!*/}
                            {/*</CardHeader>*/}
                            <div className="pt-4 px-4 font-medium text-center text-lg tracking-normal">
                                Check your email to confirm
                            </div>
                        </div>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                You've successfully signed up. Please check your email to confirm your account
                                before signing in.
                            </p>
                        </CardContent>
                    </Card>
                ) : (
                    <Card>
                        <div>
                            <div className="font-medium text-lg tracking-normal">Sign up</div>
                            <div>Create a new account</div>
                        </div>
                        <CardContent>
                            <form onSubmit={handleSignUp}>
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
                                        </div>
                                        <input
                                            id="password"
                                            type="password"
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <div className="flex items-center">
                                            <label htmlFor="repeat-password">Repeat Password</label>
                                        </div>
                                        <input
                                            id="repeat-password"
                                            type="password"
                                            required
                                            value={repeatPassword}
                                            onChange={(e) => setRepeatPassword(e.target.value)}
                                        />
                                    </div>
                                    {error && <p className="text-sm text-red-500">{error}</p>}
                                    <Button type="submit" className="w-full" disabled={isLoading}>
                                        {isLoading ? 'Creating an account...' : 'Sign up'}
                                    </Button>
                                </div>
                                <div className="mt-4 text-center text-sm">
                                    Already have an account?{' '}
                                    <a href="/login" className="underline underline-offset-4">
                                        Sign in
                                    </a>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                )}
            </div>
        )
    }

