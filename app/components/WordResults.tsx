import {HeaderRow} from "~/components/HeaderRow";
import {WordListRow} from "~/components/WordListRow";

export function WordResults({results}) {
    return (
        results.map((r, i: number) =>
            <>
                <HeaderRow word={r.word} key={"h" + i}/>
                <WordListRow tracks={r.tracks.tracks} key={"s" + i}/>
            </>
        )
    );
}
