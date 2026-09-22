import {CloudWordEditRow} from "~/components/CloudWordEditRow";
import {useState} from "react";
import {CloudWordEditButtons} from "~/components/CloudWordEditButtons";
import {IoMdCheckmark} from "react-icons/io";
import {CloudWordAddRow} from "~/components/CloudWordAddRow";


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