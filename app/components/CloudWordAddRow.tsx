import {CloudWordEditRow} from "~/components/CloudWordEditRow";
import {IoMdCheckmark} from "react-icons/io";
import {useState} from "react";

export function CloudWordAddRow() {
    const [newWord, setNewWord] = useState<string>("Add new word")

    return (
        <>
            <label className="mb-2 -mr-.5">Add: </label>
            <input type="text"
                   className="pl-1 mb-2 border border-black max-w-fit w-32"
                   value={newWord}/>
            <span className="mt-1 pt-1 align-text-top text-xl">
                    <button className="ml-2 font-bold"
                            onClick={e => {
                                e.preventDefault();
                            }}
                    >
                        {/*<FcCheckmark />*/}
                        <IoMdCheckmark />
                    </button>
                </span>
        </>
    )
}