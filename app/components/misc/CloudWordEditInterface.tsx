import {CloudWordEditRow} from "~/components/misc/CloudWordEditRow";
import {useState} from "react";
import {CloudWordEditButtons} from "~/components/misc/CloudWordEditButtons";
import {IoMdCheckmark} from "react-icons/io";
import {CloudWordAddRow} from "~/components/misc/CloudWordAddRow";


export function CloudWordEditInterface({cloud}) {

    return (
        <div>
            <form>
                <CloudWordAddRow/>

                <br/>

                {cloud.map((w, i) =>
                    <CloudWordEditRow key={i} cloudWord={w}/>
                )}
            </form>
        </div>
    );
}