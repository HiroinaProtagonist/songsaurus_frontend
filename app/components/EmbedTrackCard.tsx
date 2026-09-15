import {Stack, Box, Card, CardContent, CardMedia, Paper, Typography, Grid} from "@mui/material";
import {IoPlay, IoPauseCircle, IoPlaySkipBackSharp, IoPlaySharp, IoPause} from "react-icons/io5";
import {useState} from "react";

export function EmbedTrackCard({track}) {
    // console.log(`Track data for card: ${JSON.stringify(track)}`);

    //TODO - CSS small device uses 4px border-radius
    return (
        <Grid spacing={0}
            // direction={{xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' }}
               size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 3 }}
               sx={{display: 'flex', borderRadius: '8px', border: 'none'}}>
            {/*<Box>*/}
                <iframe
                    data-testid="embed-iframe" className="rounded-xl"
                    src={"https://open.spotify.com/embed/track/" + track.id}
                    width="300" height="400" frameBorder="0" allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                />
            {/*</Box>*/}
        </Grid>

        // <Card sx={{display: 'flex', borderRadius: '8px', border: 'none', height: 352,}}>
        //     <Box sx={{display: 'flex', flexDirection: 'column', border:'none'}}>
        //         <Box sx={{
        //             display: 'flex', flexDirection: 'column',
        //             justifyContent: 'center', alignItems: 'center',
        //             // border: 'thin solid black',
        //             // height: 360,
        //             // width: 360,
        //             // width: track.album.images[1].width * 1.1
        //         }}
        //         >


        //         </Box>
        //         {/*<CardContent sx={{flex: '1 0 auto', border: 'none'}}>*/}
        //         {/*    <Typography className="w-full" noWrap>{track.name}</Typography>*/}
        //
        //         {/*    {track.artists.map((a) =>*/}
        //         {/*        <Typography className="w-full" noWrap> {a.name}, </Typography>*/}
        //         {/*    )}*/}
        //
        //         {/*    <Typography className="w-full" noWrap>{track.album.name}, {track.album.release_date}</Typography>*/}
        //         {/*</CardContent>*/}
        //     </Box>
        // </Card>


    )
}


{/*    return (*/}
{/*        /!*<Card sx={{display: 'flex', borderRadius: '8px', border: 'thin solid black'}}>*!/*/}
{/*        /!*    <Box sx={{display: 'flex', flexDirection: 'column', border:'none'}}>*!/*/}
{/*        /!*        <Box sx={{display: 'flex', flexDirection: 'column',*!/*/}
{/*        /!*            justifyContent: 'center', alignItems: 'center',*!/*/}
{/*        /!*            // border: 'thin solid black',*!/*/}
{/*        /!*            height: track.track.album.images[1].height * 1.25,*!/*/}
{/*        /!*            width: track.track.album.images[1].width * 1.1*!/*/}
{/*        /!*        }}*!/*/}
{/*        /!*        >*!/*/}
{/*                    <div className="pb-2"><span className="text-4xl">OO</span>, Powered by Spotify</div>*/}
{/*                    <CardMedia id='album_art' component='img'*/}
{/*                               sx = {{ borderRadius: '8px',*/}
{/*                                   border: 'thin solid black',*/}
{/*                                   width: track.track.album.images[1].width,*/}
{/*                                   height: track.track.album.images[1].height}}*/}
{/*                               image = {<iframe data-testid="embed-iframe" className="rounded-xl"*/}
{/*                                                src={"https://open.spotify.com/embed/track/" + track.track.id"}*/}
{/*                                                    width="100%" height="352" frameBorder="0" allowFullScreen={false}*/}
{/*                                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"*/}
{/*                                                    loading="lazy"></iframe>}*/}
{/*                               alt = "test"*/}
{/*                    />*/}
{/*                </Box>*/}
{/*                <CardContent sx={{ flex: '1 0 auto', border: 'none'}}>*/}
{/*                    <Typography>{track.track.name}</Typography>*/}

{/*                    {track.track.artists.map((a) =>*/}
{/*                        <Typography>{a.name}, </Typography>*/}
{/*                    )}*/}

{/*                    <Typography>{track.track.album.name}, {track.track.album.release_date}</Typography>*/}
{/*                </CardContent>*/}
{/*            </Box>*/}
{/*        </Card>*/}
{/*    );*/}
{/*}*/}