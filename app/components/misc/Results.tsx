import {SongListRow} from "~/components/misc/SongListRow";
import {HeaderRow} from "~/components/common/HeaderRow";

export function Results({results, explicit}) {
    return (
        results.map((r, i: number) =>
            <>
                <HeaderRow word={r.word} key={"h" + i}/>
                <SongListRow tracks={r.tracks.tracks} explicit={explicit} key={"s" + i}/>
            </>
        )
    );
}
