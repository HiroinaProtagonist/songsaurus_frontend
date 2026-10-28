

export function DefinitionsList({shortDefs}) {

    return (
        <div className="border-b border-b-black pb-2 mb-2">
            <div className="w-1/3 border-b border-dashed border-b-black italic">def.: </div>
            {shortDefs &&
                shortDefs.map((s) =>
                        <div className="italic">{s}</div>
                )
            }
        </div>
    )
}