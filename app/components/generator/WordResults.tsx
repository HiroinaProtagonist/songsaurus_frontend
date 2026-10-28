import {HeaderRow} from "~/components/common/HeaderRow";
import {WordListRow} from "~/components/generator/WordListRow";
import {WordHeaderRow} from "~/components/generator/WordHeaderRow";
import {useEffect, useState} from "react";
import {Link} from "react-router";
import {Stack} from "@mui/material";
import {RhymeListRow} from "~/components/generator/RhymeListRow";
import {RhymeList} from "~/components/generator/RhymeList";

export function WordResults({results}) {

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

    // console.log(`WordResults: ${JSON.stringify(results)}`);
    // console.log(`WR: ${headerWords()}`);
    // console.log(`Words: ${JSON.stringify(results.words[0].words)}`);
    // console.log(`Rhymes: ${JSON.stringify(results.rhymes)}`);

    const getAllRhymes = (word) => {
        // console.log(`Rhymes: ${JSON.stringify(results.rhymes)}; Word: ${JSON.stringify(word)}`);

        for (const rhymeGroup of results.rhymes) {
            if (word == rhymeGroup.search) { return rhymeGroup}
        }
    }

    const processWords = () => {
        let wordsObject = {};

        for (const word of results.words[0].words) {
            let wordPos = `${word.metaId}_${word.partOfSpeech}`
            let rhymingGroups = getAllRhymes(word.metaId);

            let wordObject = {};
            wordObject["metaId"] = word.metaId;
            wordObject["metaUuid"] = word.metaUuid;
            wordObject["partOfSpeech"] = word.partOfSpeech;
            wordObject["shortDef"] = word.shortDef;
            wordObject["synonyms"] = word.synonyms;
            wordObject["antonyms"] = word.antonyms;
            wordObject["stems"] = word.stems;
            wordObject["offensive"] = word.offensive;
            wordObject["rhymes"] = rhymingGroups.rhymes;
            wordObject["allRhymes"] = rhymingGroups.allRhymes;
            wordsObject[wordPos] = wordObject;
        }

        return [wordsObject];
    }

    const [words, setWords] = useState<{}[]>(processWords());

    // console.log(`Processed words: ${JSON.stringify(words)}`);
    // console.log(`Current words: ${JSON.stringify(words[0][activeWordPos])}`);
    // console.log(`Activewordpos: ${activeWordPos}`);

    return (
        <Stack spacing={1}>
            <div className="flex flex-row justify-between">
                <span>Searchterm: {results.search} - </span>

                <span>
                    {results.words[0].words.map((w) =>
                        <span className="mx-2">
                            {activeWordPos != `${w.metaId}_${w.partOfSpeech}` &&
                                <button className="px-1 border w-fit"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActiveWordPos(`${w.metaId}_${w.partOfSpeech}`);
                                    }}
                                >{w.metaId}: {w.partOfSpeech}</button>
                            }

                            {activeWordPos == `${w.metaId}_${w.partOfSpeech}` &&
                                <button className="px-1 w-fit font-bold border-x-3 border-t-3 border-red-500 border-b border-b-black"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setActiveWordPos(`${w.metaId}_${w.partOfSpeech}`);
                                        }}
                                >{w.metaId}: {w.partOfSpeech}</button>
                            }
                        </span>
                    )}

                    <span className="mx-2">
                        {activeWordPos != "All_" &&
                            <button className="px-1 border w-fit"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActiveWordPos("All_");
                                    }}
                            >All</button>
                        }

                        {activeWordPos == "All_" &&
                            <button className="px-1 w-fit font-bold border-b border-b-black border-x-3 border-t-3 border-red-500"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActiveWordPos("All_");
                                    }}
                            >All</button>
                        }

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

                {(highlight == "Synonyms" && activeWordPos.length > 0) &&
                    <WordListRow words={words[0][activeWordPos].synonyms}
                                 key={`srow_${words[0][activeWordPos].metaUuid}`}/>
                }

                {(highlight == "Antonyms" && activeWordPos.length > 0) &&
                    <WordListRow words={words[0][activeWordPos].antonyms}
                                 key={`arow_${words[0][activeWordPos].metaUuid}`}/>
                }

                {(highlight == "Rhyming" && activeWordPos.length > 0) &&
                    <RhymeListRow rhymes={words[0][activeWordPos].rhymes}
                                  allRhymes={words[0][activeWordPos].allRhymes}
                                  key={`rrow_${words[0][activeWordPos].metaUuid}`}/>
                }

                {(highlight == "All" && activeWordPos.length > 0) &&
                    <RhymeList rhymes={words[0][activeWordPos].rhymes}
                                  allRhymes={words[0][activeWordPos].allRhymes}
                                  key={`rrow_${words[0][activeWordPos].metaUuid}`}/>
                }
            </>
        </Stack>
    );
}
