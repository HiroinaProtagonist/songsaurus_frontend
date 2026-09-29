import {HeaderRow} from "~/components/HeaderRow";
import {WordListRow} from "~/components/WordListRow";
import {WordHeaderRow} from "~/components/WordHeaderRow";

export function WordResults({results}) {
    console.log(`WordResults: ${JSON.stringify(results.type) + "; " + results.payload}`);

    const headerWords = () => {
        const makeHeader = [];
        for (const r of results) {
            makeHeader.push(r.type);
        }

        return makeHeader;
    }

    console.log(`WR: ${headerWords()}`);

    return (
        <>
            {results.map((r, i:number) =>
                <>
                    <WordHeaderRow wordType={r.type} headerWords={headerWords()}/>
                    <WordListRow words={r.payload.items} key={"k" + i}/>
                </>
            )}
        </>
    );
}
