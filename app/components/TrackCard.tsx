import {Box, Card, CardContent, CardMedia, Paper, Typography} from "@mui/material";
import {IoPlay, IoPauseCircle, IoPlaySkipBackSharp, IoPlaySharp, IoPause} from "react-icons/io5";
import {useState} from "react";

export function TrackCard(track) {
    console.log(`Track: ${JSON.stringify(track.track.track)}`);

    const [playing, setPlaying] = useState<boolean>();

    //TODO - CSS small device uses 4px border-radius
    return (
        <Card sx={{display: 'flex', borderRadius: '8px', border: 'thin solid black'}}>
            <Box sx={{display: 'flex', flexDirection: 'column', border:'none'}}>
                <Box sx={{display: 'flex', flexDirection: 'column',
                    justifyContent: 'center', alignItems: 'center',
                    // border: 'thin solid black',
                    height: 220, width: 220}}
                >
                    <div className="pb-2"><span className="text-4xl">OO</span>, Powered by Spotify</div>
                    <CardMedia id='album_art' component='img'
                               sx = {{ borderRadius: '8px',
                                   border: 'thin solid black',
                                   width: 200, height: 150}}
                               image = {track.track.track.image}
                               alt = {track.track.track.alt}
                    />
                </Box>
                <Box sx={{ display:'flex', flexDirection:'row', flexWrap:'nowrap', justifyContent:'center'}} className="border-y-2 border-y-black">
                    <div className="justify-center items-center font-bold py-2 text-2xl w-full">
                        {!playing &&
                            <span className="flex flex-row w-full items-center justify-center border-0 border-black">
                                <button className="flex flex-row items-center justify-center border-1 border-black rounded-sm"
                                    onClick={e => {
                                    e.preventDefault();
                                    setPlaying(!playing);
                                }}>
                                    <IoPlaySharp />
                                </button>
                            </span>
                        }

                        {playing &&
                            <span className="flex flex-row gap-1 w-full items-center justify-center border-0 border-green-400">
                                <button className="flex flex-row items-center justify-center border-1 border-black rounded-sm"
                                        onClick={e => {
                                            e.preventDefault();
                                            setPlaying(!playing);
                                        }}>
                                    <IoPlaySkipBackSharp/>
                                </button>
                                <button className="flex flex-row items-center justify-center border-1 border-black rounded-sm"
                                        onClick={e => {
                                        e.preventDefault();
                                        setPlaying(!playing);
                                    }}>
                                    <IoPause/>
                                </button>
                            </span>
                        }

                    </div>
                </Box>
                <CardContent sx={{ flex: '1 0 auto', border: 'none'}}>
                    <Typography>{track.track.track.title}</Typography>
                    <Typography>{track.track.track.artist}</Typography>
                    <Typography>{track.track.track.album}, {track.track.track.year}</Typography>
                </CardContent>
            </Box>
        </Card>
    );
}