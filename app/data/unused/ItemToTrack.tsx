
function ItemToTrack(item:any) {
    const track = {};

}

export function ResultToTracks(result:any, word:string) {
    return {
        "word":result.word,
        "tracks":result.tracks.items,
        "href":result.tracks.href,
        "previous":result.tracks.previous,
        "next":result.tracks.next,
        "limit":result.tracks.limit,
        "offset":result.tracks.offset,
        "total":result.tracks.total,
    };
}
