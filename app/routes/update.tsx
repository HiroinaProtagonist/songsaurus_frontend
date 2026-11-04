import { useState } from 'react'
import {supabase} from "~/db/supabase";
import {Card, CardContent, CardHeader} from "@mui/material";

export default function Update({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleUpdatePassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.updateUser({ password });
            if (error) { throw error; }
            // Update this route to redirect to an authenticated route. The user already has an active session.
            location.href = '/protected';
        } catch (error: unknown) {
            setError(error instanceof Error ? error.message : 'An error occurred');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex flex-row justify-center mt-16 w-full" {...props}>
            <Card>
                <CardHeader>
                    <div className="font-medium text-lg tracking-normal">Reset Your Password</div>
                    <div>Please enter your new password below.</div>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleUpdatePassword}>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <label htmlFor="password">New password</label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="New password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            {error && <p className="text-sm text-red-500">{error}</p>}
                            <button type="submit" className="w-full" disabled={isLoading}>
                                {isLoading ? 'Saving...' : 'Save new password'}
                            </button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
