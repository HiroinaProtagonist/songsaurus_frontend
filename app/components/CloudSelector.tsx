import {Form} from "react-router";
import {Select} from "@mui/material";
import {
    type CloudRecord,
    type ElementType,
    type reactWordCloud,
    stringToWordCloudArray
} from "~/data/cloud_data";

export function CloudSelector({clouds, cloud, setCloud}){     //:Route.ComponentProps) {
    // console.log(`${JSON.stringify(clouds[0])}`);
    return (
        <div className="p-2 border-4 border-purple-600 grow">
            <form>
                <label htmlFor="cloudSelect" className="pl-4">Cloud:</label>
                <select name="cloudSelect" id="cloudSelect"
                    className="ml-2 pl-2 border border-black"
                    onChange={e => {
                        setCloud(stringToWordCloudArray(e.target.value));
                    }}
                >
                    <option value='' key='0'>Choose cloud</option>
                    {clouds.map((cloud:CloudRecord) =>
                        <option value={cloud.elements} key={cloud.id} >{cloud.title}</option>
                    )}
                </select>
                {/*<button className="ml-2 px-2 border border-black" onClick={e => {*/}
                {/*    e.preventDefault();*/}
                {/*    // setCloud(stringToWordCloudArray(cloud));*/}
                {/*    console.log('cloud' + stringToWordCloudArray(cloud));*/}
                {/*}}>Select</button>*/}
            </form>

        </div>
    );
}