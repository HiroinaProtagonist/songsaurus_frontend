import {Link} from "react-router";
import {useState} from "react";
import {GiHamburgerMenu} from "react-icons/gi";


export function HideableMenuBar({links}) {
    const [expanded, setExpanded] = useState<boolean>(false);

    return (
        <span className="flex flex-row justify-start align-middle items-baseline pl-2">
            {expanded && links.map((l:{name: string, link:string}) =>
                <span className="pr-2">
                    <Link to={l.link}>{l.name}</Link>
                </span>
            )}

            {
                <span>
                    <button className="align-middle pr-1"
                        onClick={e => setExpanded(!expanded)}>
                        <GiHamburgerMenu />
                    </button>
                </span>
            }
        </span>
    )
}
