import {Grid, Stack} from "@mui/material";
import {Link} from "react-router";
import {WordHeaderRowWord} from "~/components/generator/WordHeaderRowWord";
import {useState} from "react";


export function WordHeaderRow({activeWordPos, activeWordType,
                                  setActiveWordType,
                                  searchWord, searchPos,
                                  headerWord, setHeaderWord,
                                  highlight, setHighlight,
                                  wordType,
                                  headerWords
}) {
    // console.log(`WordHeaderRow: ${wordType}`);
    // console.log(`Searchpos: ${searchPos}`);

    const [currentWordPos, setCurrentWordPos] = useState<string>();
    const wordPosHeader = `${searchWord} (${searchPos})`;

    return (
        <Grid direction="row"
              className="grow flex flex-row justify-between w-full
                        px-0 pt-4
                        pb-0 mb-0
                        underline-offset-auto
                        border-b border-black">

            <div className="grow flex flex-row w-full justify-between">
                <span className="w-fit pr-1 mr-4 border-0 border-blue-500" id={searchWord}>
                    <Link to={`#${searchWord}_${searchPos}`}>
                        {searchWord != undefined ? searchWord : ""}
                        {(searchPos != undefined && searchPos.length > 1) ? ` (${searchPos})` : ""}
                    </Link>
                </span>

                <span className="flex flex-row border-0 border-pink-500">
                    <span className="border-0 border-purple-500">
                        {headerWords.map((h) =>
                            <span id={h}>

                                {/*{h}*/}

                                <WordHeaderRowWord activeWordPos={activeWordPos} activeWordType={activeWordType}
                                                   // setActiveWordPos={setActiveWordPos}
                                                   setActiveWordType={setActiveWordType}
                                                   highlight={activeWordType} setHighlight={setHighlight}
                                                   headerWord={h} setHeaderWord={setHeaderWord}
                                                   searchWord={searchWord} searchPos={searchPos}/>
                            </span>
                        )}
                    </span>
                </span>
            </div>

        </Grid>
    );
}
