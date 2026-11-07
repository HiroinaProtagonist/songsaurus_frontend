import {Box, Paper} from "@mui/material";
import {Link} from "react-router";
import {GrCheckmark} from "react-icons/gr";
import {MdOutlineDeleteForever} from "react-icons/md";
import {useRef, useState} from "react";
import {FaCheck, FaMinus, FaMinusCircle} from "react-icons/fa";
import axios from "axios";
import {deleteCloudWord, supabase} from "~/db/supabase";
import type {Tracks} from "~/model/tracks";
import {combi_mock} from "~/data/sample_words";
import {LIMIT} from "~/utils/constants";

export function EditCloudWordTag({word, cloud_id, word_id, editCloud, loaded, fromPage, setResults, setLoaded}) {
    // console.log(`Tag: ${cloud}; Word: ${word}`);
    console.log(`from: ${JSON.stringify(fromPage)}; Loaded: ${loaded}; EditCloud: ${editCloud}`);

    const [cloudWord, setCloudWord] = useState<string>(word);
    const [error, setError] = useState<string>("");

    const getWords =
        async (explicit:boolean, limit:string, word:string) => {
            //TODO check mock models against current live

            // const searchArray = word.map(w => w.name)

            console.log(`Searching for words for word: ${JSON.stringify(word)}`);

            axios
                .get<[]>(`/wordsaurus/combi/${word}`)
                .then((res) => {
                    setResults(res.data);
                    setLoaded(true);
                    setError("");
                    console.log(`Results from api: ${JSON.stringify(res.data)}`);
                })
                .catch((err) => {
                    setError(err.message);
                    setLoaded(true);
                });
        };

    function getMockWords(explicit: boolean, word: string[]) {
        // console.log(`Load sample for word: ${word}, ${explicit ? "not" : ""} including explicit words.`)
        setResults(combi_mock());
        setLoaded(true);

        // console.log(`Words requested: ${JSON.stringify(combi_mock())}`)
    }

    const deleteCloudWord =
        async (cloud_id: string, word_id: number) => {
            console.log(`Delete word_id ${word_id} from cloud_id ${cloud_id}`);
            await deleteCloudWord(cloud_id, word_id);
    };

    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
                m: 1,
                // width: 32,
                // height: 20,
            },
        }} className="align-middle">

            <form>
                <Paper className="border-0 border-pink-300 w-fit p-2 align-middle">
                    {!loaded && fromPage == "/" && <>{word}</>}

                    {loaded && fromPage == "/" && <Link to={"#" + word}>{word}</Link>}

                    {!editCloud && fromPage == "/generator" &&
                        <>
                            <button onClick={e => {
                                e.preventDefault();
                                console.log(`Search for word: ${word}`);
                                // getMockWords(true, [word]);
                                getWords(true, LIMIT, word);
                            }}>
                                {word}
                            </button>
                        </>
                    }

                    {editCloud &&
                    // <>
                    <Paper elevation={0} className="align-middle
                    border-0 border-black
                    pl-1 pt-1 pb-1"
                    >
                        <button>
                            {cloudWord.trim()}
                        </button>

                        <button
                            className="align-top pl-2 pr-1 mt-1"
                            onClick={e => {
                                e.preventDefault();
                                console.log(`Clicked delete: ${cloudWord}`);
                                // deleteCloudWord(cloud_id, word_id);
                        }}>
                            <FaMinusCircle />
                        </button>

                    </Paper>
                    }

                </Paper>
            </form>

        </Box>
    )
}