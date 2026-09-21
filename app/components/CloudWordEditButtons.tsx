import {MdDelete, MdEdit} from "react-icons/md";
import {FcCheckmark} from "react-icons/fc";
import {IoMdCheckmark} from "react-icons/io";


export function CloudWordEditButtons(word) {
    return (
        <>
            <span className="mt-1 pt-1 align-text-top text-xl">
                <button className="ml-2 font-bold"
                        onClick={e => {
                            //TODO update database and loaded string
                            e.preventDefault();
                        }}
                >
                    {/*<FcCheckmark />*/}
                    <IoMdCheckmark />
                </button>
            </span>

            <span className="mt-1 pt-1 align-text-top text-xl">
                <button className="ml-2 font-bold"
                        onClick={e => {
                            //TODO update database and loaded string
                            e.preventDefault();
                        }}
                >
                    <MdDelete/>
                </button>
            </span>
        </>
    )
}
