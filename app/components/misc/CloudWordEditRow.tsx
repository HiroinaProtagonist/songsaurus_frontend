import {CloudWordEditButtons} from "~/components/misc/CloudWordEditButtons";
import {useState} from "react";


export function CloudWordEditRow({cloudWord}) {
    const [word, setWord] = useState<string>(cloudWord);

    return (
        <>
            <label>Edit: </label>
            <input type="text" className="ml-.5 pl-1 border border-black max-w-fit w-32" value={word}
                onChange = {(e) => setWord(e.target.value)}
            />
            <CloudWordEditButtons word={word}/>
        </>
    )
}