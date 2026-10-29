import {Box, Paper} from "@mui/material";
import {Link} from "react-router";
import {GrCheckmark} from "react-icons/gr";
import {MdOutlineDeleteForever} from "react-icons/md";
import {useRef, useState} from "react";
import {FaCheck, FaMinus, FaMinusCircle} from "react-icons/fa";
import axios from "axios";
import {deleteCloudWord} from "~/db/supabase";

export function EditCloudWordTag({word, cloud_id, word_id, editCloud, loaded}) {
    // console.log(`Tag: ${cloud}; Word: ${word}`);

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
                    {!editCloud && !loaded && <>{word}</>}

                    {!editCloud && loaded && <Link to={"#" + word}>{word}</Link>}

                    {editCloud &&
                    <>
                        <input type="text" disabled={true} name="editWordTag" id="editWordTag"
                            value={cloudWord} size={word.length}
                            className="w-fit pl-1 border-0 border-black"
                            onChange={e => setCloudWord(e.target.value)}
                        />

                        <label>
                            {/*<button*/}
                            {/*    className="pl-2 mt-4"*/}
                            {/*    onClick={e => {*/}
                            {/*        e.preventDefault();*/}
                            {/*        console.log(`Clicked edit: ${cloudWord}`)*/}
                            {/*}}>*/}
                            {/*    <FaCheck />*/}
                            {/*</button>*/}
                            <button
                                className="pl-0 mt-1"
                                onClick={e => {
                                    e.preventDefault();
                                    console.log(`Clicked delete: ${cloudWord}`);
                                    deleteCloudWord(cloud_id, word_id);
                            }}>
                                <FaMinusCircle />
                            </button>
                        </label>
                    </>}
                </Paper>
            </form>

        </Box>
    )
}