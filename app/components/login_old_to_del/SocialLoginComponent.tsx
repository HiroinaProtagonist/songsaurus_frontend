// 'use client'

import { useState } from 'react'
import {Button, Card, CardContent, CardHeader} from "@mui/material";
import {supabase} from "~/db/supabase";



export function SocialLoginComponent({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleSocialLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)

        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'spotify',
            })

            if (error) throw error
            location.href = '/'
        } catch (error: unknown) {
            setError(error instanceof Error ? error.message : 'An error occurred')
            setIsLoading(false)
        }
    }

    return (
        <div className="flex flex-row justify-center mt-16 w-full" {...props}>
            <Card>
                {/*<CardHeader>*/}
                    {/*<div className="font-medium text-lg tracking-normal">Login</div>*/}
                    <div className="pt-4 px-4 font-medium text-center text-lg tracking-normal">
                        Sign in to your account to continue
                    </div>
                {/*</CardHeader>*/}
                <CardContent>
                    <form onSubmit={handleSocialLogin}>
                        <div className="text-center border-0 border-black">
                            {error && <p className="text-sm text-destructive-500">{error}</p>}
                            <Button type="submit" className="w-full" disabled={isLoading}>
                                {isLoading ? 'Signing in...' : 'Continue with Spotify'}
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
