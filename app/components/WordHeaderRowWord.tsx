import {Link} from "react-router";
import {useState} from "react";


export function WordHeaderRowWord({
                                      activeWordPos,
                                      activeWordType,
                                      // setActiveWordPos,
                                      setActiveWordType,
                                      highlight, setHighlight,
                                      headerWord, setHeaderWord,
                                      searchWord, searchPos}) {
    console.log(`headerWord: ${headerWord}; highlight: ${highlight}`);

    const [currentWordType, setCurrentWordType] = useState<string>();

    const makeLink = () => {
        return `#${headerWord}_${searchWord}_${searchPos}`;
    }

    return (
        <>
            <button className="" onClick={(e) => {
                e.preventDefault();
                // setActiveWordPos(activeWordPos);
                setActiveWordType(headerWord);
                setHighlight(headerWord);
            }}>
                <Link to={makeLink()}>
                    {headerWord == highlight &&

                        <span className="mr-2 px-1 font-bold border-x-3 border-t-3 border-red-500">
                            {headerWord}
                        </span>
                    }

                    {headerWord != highlight &&
                        // activeWordPos == `${searchWord}_${searchPos}` &&
                        <span className="mr-2 px-1 font-bold
                            border-0 border-red-500">
                            {headerWord}
                        </span>
                    }
                </Link>
            </button>
        </>
    )
}
