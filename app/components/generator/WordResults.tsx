import {HeaderRow} from "~/components/common/HeaderRow";
import {WordListRow} from "~/components/generator/WordListRow";
import {WordHeaderRow} from "~/components/generator/WordHeaderRow";
import {useEffect, useState} from "react";
import {Link} from "react-router";
import {Stack} from "@mui/material";
import {RhymeListRow} from "~/components/generator/RhymeListRow";
import {RhymeList} from "~/components/generator/RhymeList";
import {DefinitionsList} from "~/components/generator/DefinitionsList";
import {WordList} from "~/components/generator/WordList";

export function WordResults({results}) {

    const [activeWordPos, setActiveWordPos] = useState<string>("");
    const [activeWordType, setActiveWordType] = useState<string>("");
    const [headerWord, setHeaderWord] = useState<string>("Synonyms");
    const [highlight, setHighlight] = useState<string>("");

    const SYNONYMS = "Synonyms";
    const ANTONYMS = "Antonyms";
    const RHYMES = "Rhymes";
    const ALL = "All";
    const headingWords = [SYNONYMS,ANTONYMS];   //,RHYMES];

    const headerWords = () => {
        const makeHeader = [];
        for (const r of headingWords) {     //, Todo reinstate all option at some point "All"]) {
            makeHeader.push(r);
        }

        return makeHeader;
    }

    // console.log(`WordResults: ${JSON.stringify(results)}`);
    // console.log(`WR: ${headerWords()}`);
    console.log(`Wordresults words: ${JSON.stringify(results.words[0].words)}`);
    // console.log(`Rhymes: ${JSON.stringify(results.rhymes)}`);

    const getAllRhymes = (word) => {
        console.log(`Rhymes123: ${JSON.stringify(results.rhymes)}; Word: ${JSON.stringify(word)}`);
        if (results.rhymes == undefined) { return undefined; }

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
            wordObject["metaId"] = word.metaId != undefined ? word.metaId : null;
            wordObject["metaUuid"] = word.metaUuid != undefined ? word.metaUuid : null;
            wordObject["partOfSpeech"] = word.partOfSpeech != undefined ? word.partOfSpeech : null;
            wordObject["shortDefs"] = word.shortDef != undefined ? word.shortDef : null;
            wordObject["synonyms"] = word.synonyms != undefined ? word.synonyms : null;
            wordObject["antonyms"] = word.antonyms != undefined ? word.antonyms : null;
            wordObject["stems"] = word.stems != undefined ? word.stems : null;
            wordObject["offensive"] = word.offensive != undefined ? word.offensive : null;

            if (rhymingGroups != undefined) {
                wordObject["rhymes"] = rhymingGroups.rhymes != undefined ? rhymingGroups.rhymes : null;
                wordObject["allRhymes"] = rhymingGroups.allRhymes != undefined ? rhymingGroups.allRhymes : null;
            }

            wordsObject[wordPos] = wordObject;
        }

        return [wordsObject];
    }

    const [words, setWords] = useState<{}[]>(processWords());
    // console.log(`Words: ${JSON.stringify(words)}`);

    // console.log(`Processed words: ${JSON.stringify(words)}`);
    // console.log(`Current words: ${JSON.stringify(words[0][activeWordPos])}`);
    // console.log(`Activewordpos: ${activeWordPos}`);

    return (
        <Stack spacing={1} className="w-full">

            {/*Search result terms*/}
            <div className="flex flex-row justify-between w-full">
                <span className="w-fit pr-1 mr-4">
                    Search term: <span className="font-bold">{results.search}</span>
                </span>

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
                                <button className="px-1 w-fit font-bold border-x-3
                                                   border-t-3 border-red-500 border-b border-b-black"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setActiveWordPos(`${w.metaId}_${w.partOfSpeech}`);

                                            //TODO set synonyms active by default after clicking search term
                                            // headerWord.length < 1 && setHeaderWord(SYNONYMS);
                                            // highlight.length < 1 && setHighlight(SYNONYMS);
                                            // activeWordType.length < 1 && setActiveWordType(SYNONYMS);
                                        }}
                                >{w.metaId}: {w.partOfSpeech}</button>
                            }
                        </span>
                    )}

                    {/*TODO implement checkbox rather than radio button behavior for search result words*/}
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

                {/*Definition - shortDefs*/}
                {activeWordPos.length > 0 &&
                    <DefinitionsList shortDefs={words[0][activeWordPos].shortDefs}
                                 key={`drow_${words[0][activeWordPos].metaUuid}`}/>
                }

                {/*wordtypes*/}
                {/*TODO convert radio button behavior to checkbox behavior*/}
                {(highlight == SYNONYMS && activeWordPos.length > 0) &&
                    <WordList words={words[0][activeWordPos].synonyms}
                                 headerWord={highlight}
                                 key={`srow_${words[0][activeWordPos].metaUuid}`}/>
                }

                {(highlight == ANTONYMS && activeWordPos.length > 0) &&
                    <WordList words={words[0][activeWordPos].antonyms}
                                 headerWord={highlight}
                                 key={`arow_${words[0][activeWordPos].metaUuid}`}/>
                }

                {(highlight == RHYMES && activeWordPos.length > 0) &&
                    <RhymeList rhymes={words[0][activeWordPos].rhymes}
                                  allRhymes={words[0][activeWordPos].allRhymes}
                                  key={`rrow_${words[0][activeWordPos].metaUuid}`}/>
                }
            </>
        </Stack>
    );
}
