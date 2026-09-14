import {Box, Card, CardContent, CardMedia, Paper, Typography} from "@mui/material";
import {IoPlay, IoPauseCircle, IoPlaySkipBackSharp, IoPlaySharp, IoPause} from "react-icons/io5";
import {useState} from "react";

export function TrackCard(track) {
    console.log(`Track data for card: ${JSON.stringify(track)}`);

    const [playing, setPlaying] = useState<boolean>();

    //TODO - CSS small device uses 4px border-radius
    return (
        <Card sx={{display: 'flex', borderRadius: '8px', border: 'thin solid black'}}>
            <Box sx={{display: 'flex', flexDirection: 'column', border:'none'}}>
                <Box sx={{display: 'flex', flexDirection: 'column',
                    justifyContent: 'center', alignItems: 'center',
                    // border: 'thin solid black',
                    height: track.track.album.images[1].height * 1.25,
                    width: track.track.album.images[1].width * 1.1
                    }}
                >
                    <div className="pb-2"><span className="text-4xl">OO</span>, Powered by Spotify</div>
                    <CardMedia id='album_art' component='img'
                               sx = {{ borderRadius: '8px',
                                   border: 'thin solid black',
                                   width: track.track.album.images[1].width,
                                   height: track.track.album.images[1].height}}
                               image = {track.track.album.images[1].url}
                               alt = "test"
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
                    <Typography>{track.track.name}</Typography>

                    {track.track.artists.map((a) =>
                            <Typography>{a.name}, </Typography>
                    )}

                    <Typography>{track.track.album.name}, {track.track.album.release_date}</Typography>
                </CardContent>
            </Box>
        </Card>
    );
}