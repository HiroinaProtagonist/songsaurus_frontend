import ReactWordcloud from "@cp949/react-wordcloud";

export function CloudUI({cloud}) {
    return (
        <div className="p-2 ml-2 border border-pink-600 w-4/5" style={{ height: '300px' }}>
                {cloud && <ReactWordcloud
                    words={cloud}
                    //TODO when word is clicked, call spotify API and search for tracks related to that word
                    //TODO apply a multiplier so the smallest words are larger, but all words have the same relative value to each other
                />}
        </div>
    );
}