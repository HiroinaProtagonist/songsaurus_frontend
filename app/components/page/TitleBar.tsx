import {Link} from "react-router";
import {HideableMenuBar} from "~/components/page/HideableMenuBar";

export function TitleBar() {
    //TODO activate account, change link

    const links = [
        {"name": "Generator", "link": "/generator"},
        // {"name": "Spotlight", "link": "/spotlight"},
        // {"name": "Forums", "link": "/forums"},
        // {"name": "Account", "link":"/account"}
    ]

    return (
        <>
            <div className="text-center pb-2">
                <span className="text-xl font-bold">
                    Songsaurus
                </span>, powered by Spotify
            </div>

            <div id="top" className="flex flex-row w-full
                mt-4
                justify-between items-baseline align-middle
                border-b-3 border-black"
            >
                <span className="px-2 w-fit border-0 border-emerald-200">
                    <a href="/" className="pr-4">Home</a>
                    <a href="/login"> Login </a>|<a href="/signup"> Signup </a>

                    {/*TODO only show if logged in*/}
                    <span>| <a href="/dashboard">Dashboard</a></span>
                </span>
                <HideableMenuBar links={links}/>
            </div>
        </>
    );
}
