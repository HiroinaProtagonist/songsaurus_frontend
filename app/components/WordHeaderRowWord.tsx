import {Link} from "react-router";


export function WordHeaderRowWord({highlight, headerWord}) {
    const makeLink = () => {
        return `#${headerWord}`;
    }

    return (
        <>
            <Link to={makeLink()}>
                {headerWord == highlight &&
                    <span className="mr-2 px-1 font-bold
                        border-x-3 border-t-3 border-red-500">
                        {headerWord}
                    </span>
                }

                {headerWord != highlight &&
                    <span className="mr-2 px-1 font-bold
                        border-0 border-red-500">
                        {headerWord}
                    </span>
                }
            </Link>
        </>
    )
}
