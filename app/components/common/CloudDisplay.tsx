import {MdCancel, MdDelete, MdEdit} from "react-icons/md";
import {useState} from "react";
import {Box, Grid} from "@mui/material";
import {EditCloudWordTag} from "~/components/misc/EditCloudWordTag";
import {deleteCloud, deleteCloudWord} from "~/db/supabase";
import {useLocation} from "react-router";

export function CloudDisplay({cloud_id, cloud, clouds, loaded, editCloud, setEditCloud, setResults, setLoaded}) {
    const location = useLocation();

    // console.log(`Clouds: ${{clouds}[0]}; CloudDisplay: ${cloud_id}; EditCloud: ${editCloud}`);
    // console.log(cloud != undefined ? cloud.words : "");

    const doDeleteCloud =
        async (cloud_id: string) => {
            console.log(`Delete cloud cloud_id: ${JSON.stringify(cloud_id)}`);
            // await deleteCloud(cloud_id, setClouds, clouds);
        };

    //update title of a cloud (explicit is set based on words added or removed
    const doEditCloud = (cloud) => {
        console.log("Called edit");
        // await editCloud(cloud_id, setClouds, clouds);
    }

    // console.log(`Loc: ${JSON.stringify(useLocation())}`);

    return (
        <>
            {cloud &&
                <div className="
                        flex flex-row justify-start
                        w-full border-0 border-emerald-100 mt-0.5 min-w-full
                        ">
                    <Box>
                        {/*{!loaded && <div>Click word to search for related words.</div>}*/}
                        {/*{loaded && <div>Click word to navigate to related results.</div>}*/}

                        <Grid container size="auto" spacing={1} className="grow w-full border-1 border-black">
                            {cloud.words.map((w, i) =>
                                <EditCloudWordTag key={w.word_id} cloud_id={cloud_id} word={w.name} word_id={w.word_id}
                                                  editCloud={editCloud} fromPage={location.pathname.toString()}
                                                  loaded={loaded}
                                                  setResults={setResults} setLoaded={setLoaded}
                                />
                            )}

                        </Grid>
                    </Box>

                    {!editCloud && location.pathname == "/generator" &&
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
                                        doDeleteCloud(cloud_id);
                                    }}
                            >
                                <MdDelete/>
                            </button>
                        </div>
                    </div>}

                    {editCloud && location.pathname == "/generator" &&
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
            }
        </>
    )
}
