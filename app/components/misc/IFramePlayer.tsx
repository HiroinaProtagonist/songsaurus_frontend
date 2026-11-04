import { useRef, useState, useEffect } from "react";
//ref: https://developer.spotify.com/documentation/embeds/playgrounds/iFrameAPI

export default function SpotifyPlayer({playing, setPlaying, urlToLoad}) {
    const embedRef = useRef(null);
    const spotifyEmbedControllerRef = useRef(null);
    const [iFrameAPI, setIFrameAPI] = useState(undefined);
    const [playerLoaded, setPlayerLoaded] = useState(false);
    const [url, setUrl] = useState(urlToLoad);

    useEffect(() => {
        if (iFrameAPI) {
            return;
        }

        window.onSpotifyIframeApiReady = (SpotifyIframeApi) => {
            setIFrameAPI(SpotifyIframeApi);
        };
    }, [iFrameAPI]);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://open.spotify.com/embed/iframe-api/v1";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        if (playerLoaded || iFrameAPI === undefined) {
            return;
        }

        iFrameAPI.createController(

        )
    })


}