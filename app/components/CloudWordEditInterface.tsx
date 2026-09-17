import {CloudWordEditRow} from "~/components/CloudWordEditRow";


export function CloudWordEditInterface({loaded, cloud}) {
    return (
        <div>
            {loaded && cloud.map((w, i) =>
                <CloudWordEditRow key={i} word={w}/>

            )}
        </div>
    );
}