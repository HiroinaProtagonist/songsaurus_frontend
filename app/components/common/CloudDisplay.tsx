import {MdCancel, MdDelete, MdEdit} from "react-icons/md";
import {useState} from "react";
import {Box, Grid} from "@mui/material";
import {EditCloudWordTag} from "~/components/misc/EditCloudWordTag";
import {deleteCloud, deleteCloudWord} from "~/db/supabase";

export function CloudDisplay({loaded, cloud_id, cloud, clouds}) {
    const [editCloud, setEditCloud] = useState<Boolean>(false);
    // console.log(`Clouds: ${{clouds}[0]}; CloudDisplay: ${cloud_id}; EditCloud: ${editCloud}`);
    // console.log(cloud != undefined ? cloud.words : "");

    const doDeleteCloud =
        async (cloud_id: string) => {
            console.log(`Delete cloud cloud_id: ${cloud_id}`);
            // await deleteCloud(cloud_id, setClouds, clouds);
        };

    //update title of a cloud (explicit is set based on words added or removed
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
                            {cloud.words.map((w, i) =>
                                <EditCloudWordTag cloud_id={cloud_id} word={w.name} word_id={w.word_id} key={w.word_id}
                                                  editCloud={editCloud} loaded={loaded}/>
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
