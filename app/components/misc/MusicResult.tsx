
export function MusicResult({musicResData}:any) {
    return (
      <div>
          track 1: {musicResData.name}<br/>
          artist 1: {musicResData.artist}<br/>
          song 1: {musicResData.song}<br/>
      </div>
    );
}