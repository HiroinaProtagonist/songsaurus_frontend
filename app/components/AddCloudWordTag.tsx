import {Box, Paper} from "@mui/material";
import {Link} from "react-router";
import {GrCheckmark} from "react-icons/gr";
import {MdOutlineDeleteForever} from "react-icons/md";
import {useRef, useState} from "react";
import {FaPlus, FaPlusCircle} from "react-icons/fa";

//TODO add back explicit, have to change backend first
export function AddCloudWordTag({word}) {
    // console.log(`Name: ${word}`);
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
            <Paper className="w-auto p-2 align-middle">
                <input type="text" name="addWordTag" id="addWordTag"
                    value={cloudWord} size={word.length}
                    className="p-1 w-20 border-1 border-black w-[]"
                    onChange={e => setCloudWord(e.target.value)}
                />

                <label>
                    <button
                        className="pl-2 mt-4"
                        onClick={e => {
                            e.preventDefault();
                            console.log(`Clicked add: ${cloudWord}`)
                    }}>
                        <FaPlusCircle />
                    </button>
                </label>
            </Paper>
        </Box>
    )
}