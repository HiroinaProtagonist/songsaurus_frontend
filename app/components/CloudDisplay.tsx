import {MdCancel, MdDelete, MdEdit} from "react-icons/md";
import {useState} from "react";
import {Box, Grid} from "@mui/material";
import {EditCloudWordTag} from "~/components/EditCloudWordTag";

export function CloudDisplay({loaded, cloud}) {
    const [editCloud, setEditCloud] = useState<Boolean>(false);
    //TODO xs - set width to 100%
    console.log("CloudDisplay: " + JSON.stringify(cloud) + `; EditCloud: ${editCloud}`);

    function doDeleteCloud(cloud) {
         console.log("Called delete");
    }

    function doEditCloud(cloud) {
        console.log("Called edit");
    }

    return (
        <>
            {loaded && cloud && !editCloud &&
            <div className="pt-3 ml-3 pl-4 pr-2 min-w-full">
                <div className="flex flex-row justify-between">
                    <Box>
                        <Grid container size="auto" spacing={1} className="border-1 border-black">
                            {cloud.map((c, i) =>
                                <EditCloudWordTag cloud={cloud} word={c} key={i} editCloud={editCloud} loaded={loaded}/>
                            )}
                        </Grid>
                    </Box>

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
                    </div>
                </div>
            </div>}

            {loaded && cloud && editCloud &&
            <div className="pt-3 ml-3 pl-4 pr-2 min-w-full">
                <div className="flex flex-row justify-between">
                    <Box>
                        <Grid container size="auto" spacing={1} className="border-0 border-black">
                            {cloud.map((c, i) =>
                                <EditCloudWordTag cloud={cloud} word={c} key={i} editCloud={editCloud} loaded={loaded}/>
                            )}
                        </Grid>
                    </Box>
                    <div className="mt-1 text-xl">
                        <button className="ml-2 font-bold"
                                onClick={e => {
                                    e.preventDefault();
                                    setEditCloud(false);
                                }}
                        >
                            <MdCancel/>
                        </button>
                    </div>
                </div>
            </div>}
        </>
    )
}
