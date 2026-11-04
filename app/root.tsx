import {
    isRouteErrorResponse,
    Links,
    Meta,
    Outlet, redirect,
    Scripts,
    ScrollRestoration,
} from "react-router";

import type {Route} from "./+types/root";
import "./app.css";
import {FooterBar} from "~/components/page/FooterBar";
import {Box, Stack} from "@mui/material";
import {TitleBar} from "~/components/page/TitleBar";
import {getDBClouds, supabase} from "~/db/supabase";
import React, {createContext} from "react";

export async function loader({ params }: Route.LoaderArgs) {
    //TODO add feature flag to switch between mock and live data
    // const clouds:CloudRecord[] = await getClouds();
    const clouds = await getDBClouds();

    const { data, error } = await supabase.auth.getSession();

    if (error) {
        location.href = "/login";
        throw redirect("/login");
    } else {
        const session = data.session;
        return {session, clouds };
    }
}

export function meta({}: Route.MetaArgs) {
    return [
        {title: "songsaurus"},
        {name: "description", content: "Search Spotify by word association"},
    ];
}

export const links: Route.LinksFunction = () => [
    {rel: "preconnect", href: "https://fonts.googleapis.com"},
    {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
    },
    {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
    },
    {
        rel: "preconnect",
        href: "https://open.spotify.com/embed/iframe-api/v1"
    }
];

export function Layout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <Meta/>
            <Links/>
            <script src="https://open.spotify.com/embed/iframe-api/v1" async></script>
        </head>
        <body className="flex flex-col justify-between h-screen
            border-y-0 border-thick border-blue-600
            mx-4 mb-4"
        >
        {children}
        {/*<FooterBar/>*/}
        <ScrollRestoration/>
        <Scripts/>
        </body>
        </html>
    );
}

export default function App({ loaderData, }:Route.ComponentProps) {
    const { session, clouds } = loaderData;
    const titleContext = createContext<{} | null>({session});
    for(const key in titleContext){
        console.log(`Titlecontext: ${titleContext}`);
    }

    return (
        <>
            <Box sx={{flexGrow: 1}} className="flex flex-col justify-between border-0 border-pink-600">
                <Stack direction="column" className="p-2 grow border-0 border-orange-400">
                    <TitleBar context={titleContext}/>
                    <div className="border-b-0 border-black">
                        <Outlet context={{session, clouds}}/>
                        {/*<Search clouds={clouds}/>*/}
                    </div>
                </Stack>
                <FooterBar/>
            </Box>
        </>
    )
}

export function ErrorBoundary({error}: Route.ErrorBoundaryProps) {
    let message = "Oops!";
    let details = "An unexpected error occurred.";
    let stack: string | undefined;

    if (isRouteErrorResponse(error)) {
        message = error.status === 404 ? "404" : "Error";
        details =
            error.status === 404
                ? "The requested page could not be found."
                : error.statusText || details;
    } else if (import.meta.env.DEV && error && error instanceof Error) {
        details = error.message;
        stack = error.stack;
    }

    return (
        <main className="pt-16 p-4 container mx-auto">
            <h1>{message}</h1>
            <p>{details}</p>
            {stack && (
                <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
            )}
        </main>
    );
}
