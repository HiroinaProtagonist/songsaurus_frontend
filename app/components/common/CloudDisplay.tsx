import {MdCancel, MdDelete, MdEdit} from "react-icons/md";
import {useState} from "react";
import {Box, Grid} from "@mui/material";
import {EditCloudWordTag} from "~/components/EditCloudWordTag";

export function CloudDisplay({loaded, cloud}) {
    const [editCloud, setEditCloud] = useState<Boolean>(false);
    // console.log("CloudDisplay: " + JSON.stringify(cloud) + `; EditCloud: ${editCloud}`);

    function doDeleteCloud(cloud) {
         console.log("Called delete");
    }

    function doEditCloud(cloud) {
        console.log("Called edit");
    }

    return (
        <>
            {cloud &&
                <div className="pl-4 pr-2 pb-1 pt-3 mt-0.5 min-w-1/4 min-h-1/4">
                <div className="flex flex-row justify-start">
                    <Box>
                        <Grid container size="auto" spacing={1} className="border-1 border-black">
                            {cloud.map((c, i) =>
                                <EditCloudWordTag cloud={cloud} word={c} key={i} editCloud={editCloud} loaded={loaded}/>
                            )}

                        </Grid>
                    </Box>

                    {!editCloud &&
                    <div>
                        <div className="mt-1 text-xl">
                            <button className="ml-2 font-bold"
                                    onClick={e => {
                                        setEditCloud(!editCloud);
                                        e.preventDefault();
                                    }}
                            >
                                <MdEdit/>
                            </button>
                        </div>

                        <div className="mt-1 text-xl">
                            <button className="ml-2 font-bold"
                                    onClick={e => {
                                        e.preventDefault();
                                        doDeleteCloud(cloud);
                                    }}
                            >
                                <MdDelete/>
                            </button>
                        </div>
                    </div>}

                    {editCloud &&
                    <div className="mt-1 text-xl">
                        <button className="ml-2 font-bold"
                                onClick={e => {
                                    e.preventDefault();
                                    setEditCloud(false);
                                }}
                        >
                            <MdCancel/>
                        </button>
                    </div>}
                </div>
            </div>}
        </>
    )
}
