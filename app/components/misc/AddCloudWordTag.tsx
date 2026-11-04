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
            <Paper className="w-fit p-2 align-middle">
                {/*<input type="text" disabled={true} name="addWordTag" id="addWordTag"*/}
                {/*    value={cloudWord.trim()}*/}
                {/*       size={(cloudWord.length-1)}*/}
                {/*    className="box-border pl-1 pt-1 pb-1 w-auto border-1 border-black"*/}
                {/*    onChange={e => setCloudWord(e.target.value)}*/}
                {/*/>*/}

                <Paper elevation={0} className="align-middle
                    border-0 border-black
                    pl-1 pt-1 pb-1"
                >

                    <button>
                        {cloudWord.trim()}
                    </button>

                {/*<label>*/}
                    <button
                        className="align-top pl-2 pr-1 mt-1"
                        onClick={e => {
                            e.preventDefault();
                            console.log(`Clicked add: ${cloudWord}`)
                    }}>
                        <FaPlusCircle />
                    </button>
                {/*</label>*/}
                </Paper>

            </Paper>
        </Box>
    )
}