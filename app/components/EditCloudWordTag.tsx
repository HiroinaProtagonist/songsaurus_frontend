import {Box, Paper} from "@mui/material";
import {Link} from "react-router";
import {GrCheckmark} from "react-icons/gr";
import {MdOutlineDeleteForever} from "react-icons/md";
import {useRef, useState} from "react";

export function EditCloudWordTag({word, cloud, editCloud, loaded}) {
    // console.log(`Tag: ${cloud}; Word: ${word}`);

    const [cloudWord, setCloudWord] = useState<string>(word);
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
                <Paper className="w-auto p-2 align-middle">
                    {editCloud && <input type="text" name="editWordTag" id="editWordTag"
                        value={cloudWord} size={word.length}
                        className="p-1 w-20 border-1 border-black"
                        onChange={e => setCloudWord(e.target.value)}
                    />}

                    {!editCloud && loaded && <Link to={"#" + word}>{word}</Link>}

                    {editCloud && <label>
                        <button
                            className="pl-2 mt-4"
                            onClick={e => {
                                e.preventDefault();
                                console.log(`Clicked edit: ${cloudWord}`)
                        }}>
                            <GrCheckmark />
                        </button>
                        <button
                            className="pl-2 mt-1"
                            onClick={e => {
                                e.preventDefault();
                                console.log(`Clicked delete: ${cloudWord}`);
                        }}>
                            <MdOutlineDeleteForever />
                        </button>
                    </label>}

                </Paper>
            </form>

        </Box>
    )
}