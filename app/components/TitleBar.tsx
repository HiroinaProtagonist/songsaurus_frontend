import {Link} from "react-router";

export function TitleBar() {
    //TODO activate account, change link

    return (
        <div id="top" className="flex flex-row w-full
            mt-4
            justify-between items-baseline align-middle
            border-b-3 border-black"
        >

            <span className="flex flex-row justify-start">
                <span className="px-2"><a href="/">Home</a></span>
                <span className="pr-2"><a href="/generator">Generator</a></span>
                <span><a href="/spotlight">Spotlight</a></span>
            </span>

            <span className="text-center">
                <span className="text-xl font-bold">
                    Songsaurus
                </span>, powered by Spotify
            </span>

            <span className="pr-2"><Link to="/acct">Account</Link></span>

        </div>
    );
}
