import ReactWordcloud from "@cp949/react-wordcloud";

export function CloudUI({cloud}) {
    return (
        <div className="pl-2 border-4 border-pink-600" style={{ height: '300px' }}>
                {cloud && <ReactWordcloud
                    words={cloud}
                    //TODO when word is clicked, call spotify API and search for tracks related to that word
                    //TODO apply a multiplier so the smallest words are larger, but all words have the same relative value to each other
                />}
        </div>
    );
}