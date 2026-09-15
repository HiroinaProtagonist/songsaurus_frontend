

export function CloudDisplay({loaded, cloud}) {
    //TODO xs - set width to 100%

    return (
        <>
            {loaded && <div className="max-w-1/2 w-1/2 pl-2 wrap-break-word whitespace-normal border-0 border-pink-600">
                {cloud.map((c, i) => <span key={i} className="pr-2">{c}</span>)}
            </div>}

            {!loaded && <div>
                {<span>Select cloud from dropdown</span>}
            </div>}
        </>
    )
}
