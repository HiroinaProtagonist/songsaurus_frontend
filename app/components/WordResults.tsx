import {HeaderRow} from "~/components/HeaderRow";
import {WordListRow} from "~/components/WordListRow";
import {WordHeaderRow} from "~/components/WordHeaderRow";
import {useState} from "react";
import {Link} from "react-router";
import {Stack} from "@mui/material";

export function WordResults({results}) {
    // const [words, setWords] = useState<[]>();
    // const [rhymes, setRhymes] = useState<[]>();
    const [activeWordPos, setActiveWordPos] = useState<string>("");
    const [activeWordType, setActiveWordType] = useState<string>("Synonyms");
    const [headerWord, setHeaderWord] = useState<string>("Synonyms");
    const [highlight, setHighlight] = useState<string>("Synonyms");

    const headerWords = () => {
        const makeHeader = [];
        for (const r of ["Synonyms","Antonyms","Rhyming", "All"]) {    //TODO use Rhymes instead of Rhyming
            makeHeader.push(r);
        }

        return makeHeader;
    }

    // setWords(results.words[0].words);
    // setRhymes(results.words[0].rhymes);

    // console.log(`WordResults: ${JSON.stringify(results)}`);
    // console.log(`WR: ${headerWords()}`);
    // console.log(`Words: ${JSON.stringify(results.words[0].words)}`);
    // console.log(`Rhymes: ${JSON.stringify(results.rhymes)}`);

    return (
        <Stack spacing={1}>
            <div className="flex flex-row justify-between">
                <span>Searchterm: {results.search} - </span>

                <span>
                    {results.words[0].words.map((w) =>
                        <span className="mx-2">
                            {
                                <button className="px-1 border w-fit"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActiveWordPos(`${w.metaId}_${w.partOfSpeech}`);
                                    }}
                                >{w.metaId}: {w.partOfSpeech}</button>
                            }
                        </span>
                    )}
                    <span className="mx-2">
                        <button className="px-1 border w-fit"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActiveWordPos("All_");
                                }}
                        >All</button>
                    </span>
                </span>
            </div>

            <>
                <WordHeaderRow
                    activeWordPos={activeWordPos} activeWordType={activeWordType}
                    setActiveWordType={setActiveWordType}
                    headerWord={headerWord} setHeaderWord={setHeaderWord}
                    highlight={highlight} setHighlight={setHighlight}
                    searchWord={activeWordPos.split("_")[0]}
                    searchPos={activeWordPos.split("_")[1]}
                    wordType={"Synonyms"}
                    // key={`h_${w.metaUuid}`}
                    headerWords={headerWords()}
                />

                {(highlight == "Synonyms" || highlight == "All") &&
                    "syn "
                    // <WordListRow words={word.synonyms} key={`w_${w.metaUuid}`}/>
                    }
                {(highlight == "Antonyms" || highlight == "All") &&
                    "ant "
                    // <WordListRow words={word.antonyms} key={`w_${w.metaUuid}`}/>
                }
                {(highlight == "Rhyming" || highlight == "All") &&
                    "rhym "
                    // <WordListRow words={word.allRhymes} key={`w_${w.metaUuid}`}/>
                }
            </>
        </Stack>
    );
}
