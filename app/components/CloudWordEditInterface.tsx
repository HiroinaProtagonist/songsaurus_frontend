import {CloudWordEditRow} from "~/components/CloudWordEditRow";
import {useState} from "react";
import {CloudWordEditButtons} from "~/components/CloudWordEditButtons";
import {IoMdCheckmark} from "react-icons/io";


export function CloudWordEditInterface({cloud}) {
    const [newWord, setNewWord] = useState<string>("Add new word")
    return (
        <div>
            <form>
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
                <br/>

                {cloud.map((w, i) =>
                    <CloudWordEditRow key={i} cloudWord={w}/>
                )}

            </form>
        </div>
    );
}