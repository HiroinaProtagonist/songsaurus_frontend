import {Link} from "react-router";
import {MdDelete, MdEdit} from "react-icons/md";
import {useState} from "react";
import {CloudWordEditButtons} from "~/components/CloudWordEditButtons";
import {Box} from "@mui/material";


export function CloudDisplay({loaded, cloud}) {
    const [editCloud, setEditCloud] = useState<Boolean>(false);
    //TODO xs - set width to 100%
    console.log("CloudDisplay: " + JSON.stringify(cloud));

    function doDeleteCloud(cloud) {
         console.log("Called delete");
    }

    return (
        <>
            {loaded && !editCloud && <div className="max-w-2/3 w-[239.733px] pt-3 pl-4
                {/*wrap-break-word whitespace-normal*/}
                border-0 border-pink-600">
                <Box>
                    {cloud.map((c, i) =>
                        <span key={i} className="pr-2">
                            <Link to={"#" + c}>{c}</Link>
                        </span>)}
                </Box>

                <span className="mt-1 pt-1 align-text-top text-xl">
                    <button className="ml-2 font-bold"
                            onClick={e => {
                                setEditCloud(!editCloud);
                                e.preventDefault();
                            }}
                    >
                        <MdEdit/>
                    </button>
                </span>
                <span className="mt-1 pt-1 align-text-top text-xl">
                    <button className="ml-2 font-bold"
                            onClick={e => {
                                e.preventDefault();
                                doDeleteCloud(cloud);
                            }}
                    >
                        <MdDelete/>
                    </button>
                </span>
            </div>}

            {loaded && editCloud && <div className="max-w-2/3 w-[239.733px] pt-3 pl-4
                wrap-break-word whitespace-normal
                border-0 border-pink-600">
                <form>
                    {cloud.map((c, i) => <div>
                        <form>
                            <label>Edit: </label>
                            <input type="text" className="pl-1 border border-black max-w-fit w-32" value={c}
                                // onChange={}
                            />
                            <CloudWordEditButtons word={c}/>
                        </form>
                    </div>)}
                </form>
            </div>}

            {!loaded && <div className="pl-4 pt-3">
                {<span>Select cloud from dropdown</span>}
            </div>}
        </>
    )
}
