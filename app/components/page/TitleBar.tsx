import {Link, useNavigate, useOutletContext} from "react-router";
import {HideableMenuBar} from "~/components/page/HideableMenuBar";
import {useContext} from "react";
import {supabase} from "~/db/supabase";
import {useSession} from "~/context/SessionContext";

export function TitleBar() {
    const navigate = useNavigate();
    const {session}:any|null = useSession();
    console.log(`Session: ${session}`);
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
                    <Link to="/" className="pr-4">Home</Link>

                    {session == null &&
                        <><Link to="/login"> Login </Link>|<Link to="/signup"> Signup </Link></>
                    }

                    {session != null &&
                        <>
                            <Link to="/"
                            onClick={(e) =>{
                                e.preventDefault();

                                //TODO pass jwt from session or user to revoke tokens
                                supabase.auth.signOut();
                                navigate("/");
                            }}> Logout </Link>|

                            <span> <Link to="/dashboard"> Dashboard</Link></span>
                        </>
                    }
                </span>

                <HideableMenuBar links={links}/>
            </div>
        </>
    );
}
