import {MdDelete, MdEdit} from "react-icons/md";


export function CloudWordEditButtons() {
    return (
        <>

            <span className="mt-1 pt-1 align-text-top text-xl">
                <button className="ml-2 font-bold"
                        onClick={e => {
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
                        }}
                >
                    <MdDelete/>
                </button>
            </span>

        </>
    )
}