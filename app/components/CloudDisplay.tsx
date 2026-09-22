import {Link} from "react-router";
import {MdDelete, MdEdit} from "react-icons/md";
import {useState} from "react";
import {Box, Grid, Paper} from "@mui/material";
import {CloudWordEditInterface} from "~/components/CloudWordEditInterface";
import {EditCloudWordTag} from "~/components/EditCloudWordTag";

export function CloudDisplay({loaded, cloud}) {
    const [editCloud, setEditCloud] = useState<Boolean>(false);
    //TODO xs - set width to 100%
    console.log("CloudDisplay: " + JSON.stringify(cloud));

    function doDeleteCloud(cloud) {
         console.log("Called delete");
    }

    return (
        <>
            {loaded && !editCloud && <div className="pt-3 ml-3 pl-4 pr-2 min-w-11/12
                {/*wrap-break-word whitespace-normal*/}
                {/*text-pretty*/}
                border-1 border-pink-600">
                <Box>
                    <Grid container size="auto" spacing={1}>
                        {cloud.map((c, i) =>
                            <EditCloudWordTag word={c} key={i} toggleActive={false}/>
                        )}

                        <div>
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
                        </div>

                    </Grid>
                </Box>
            </div>}

            {loaded && editCloud && <div className="max-w-2/3 w-[239.733px] pt-3 pl-4
                wrap-break-word whitespace-normal
                border-0 border-pink-600">
                {cloud.map((c, i) =>
                    <EditCloudWordTag word={c} key={i} toggleActive={true}/>
                )}
            </div>}
        </>
    )
}
