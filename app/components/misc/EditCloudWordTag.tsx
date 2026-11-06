import {Box, Paper} from "@mui/material";
import {Link} from "react-router";
import {GrCheckmark} from "react-icons/gr";
import {MdOutlineDeleteForever} from "react-icons/md";
import {useRef, useState} from "react";
import {FaCheck, FaMinus, FaMinusCircle} from "react-icons/fa";
import axios from "axios";
import {deleteCloudWord, supabase} from "~/db/supabase";
import type {Tracks} from "~/model/tracks";

export function EditCloudWordTag({word, cloud_id, word_id, editCloud, loaded, fromPage}) {
    // console.log(`Tag: ${cloud}; Word: ${word}`);
    console.log(`from: ${JSON.stringify(fromPage)}; Loaded: ${loaded}; EditCloud: ${editCloud}`);

    const [cloudWord, setCloudWord] = useState<string>(word);
    const [error, setError] = useState<string>("");

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
                    {!editCloud && !loaded && fromPage == "/generator" &&
                        <>
                            <button onClick={e => {
                                e.preventDefault();
                                console.log(`Search for word: ${word}`);
                                // getTracksForWord();
                            }}>
                                {word}
                            </button>
                        </>
                    }

                    {!editCloud && !loaded && fromPage == "/" && <>{word}</>}

                    {!editCloud && loaded && <Link to={"#" + word}>{word}</Link>}

                    {editCloud &&
                    // <>
                    <Paper elevation={0} className="align-middle
                    border-0 border-black
                    pl-1 pt-1 pb-1"
                    >
                        <button>
                            {cloudWord.trim()}
                        </button>


                        {/*<input type="text" disabled={true} name="editWordTag" id="editWordTag"*/}
                        {/*    value={cloudWord} size={word.length}*/}
                        {/*    className="w-fit pl-1 border-0 border-black"*/}
                        {/*    onChange={e => setCloudWord(e.target.value)}*/}
                        {/*/>*/}

                        {/*<label>*/}
                            {/*<button*/}
                            {/*    className="pl-2 mt-4"*/}
                            {/*    onClick={e => {*/}
                            {/*        e.preventDefault();*/}
                            {/*        console.log(`Clicked edit: ${cloudWord}`)*/}
                            {/*}}>*/}
                            {/*    <FaCheck />*/}
                            {/*</button>*/}
                            <button
                                className="align-top pl-2 pr-1 mt-1"
                                onClick={e => {
                                    e.preventDefault();
                                    console.log(`Clicked delete: ${cloudWord}`);
                                    // deleteCloudWord(cloud_id, word_id);
                            }}>
                                <FaMinusCircle />
                            </button>
                        {/*</label>*/}
                    {/*</>}*/}
                    </Paper>
                    }
                </Paper>
            </form>

        </Box>
    )
}