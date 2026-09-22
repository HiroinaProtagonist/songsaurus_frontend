import {Box, Paper} from "@mui/material";
import {Link} from "react-router";
import {FcCheckmark} from "react-icons/fc";
import {GrCheckmark} from "react-icons/gr";
import {MdOutlineDeleteForever} from "react-icons/md";
import {useState} from "react";

export function EditCloudWordTag({word, toggleActive}) {
    const [cloudWord, setCloudWord] = useState<string>(word);
    return (
        // <span className="pr-2">
        //     <Link to={"#" + word}>
        //         <Paper className="max-w-fit min-w-fit">
        //             {word}
        //         </Paper>
        //     </Link>
        // </span>

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
                <Paper className="w-fit p-2 align-middle">
                    {toggleActive && <input type="text" name="editWordTag" id="editWordTag" value={cloudWord}
                        className="p-1 w-20 border-1 border-black"
                        onChange={e => setCloudWord(e.target.value)}
                    />}

                    {!toggleActive && <Link to={"#" + word}>{word}</Link>}

                    {toggleActive && <label>
                        <button
                            className="pl-2 mt-1"
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