import {Stack, Box, Card, CardContent, CardMedia, Paper, Typography, Grid} from "@mui/material";
import {IoPlay, IoPauseCircle, IoPlaySkipBackSharp, IoPlaySharp, IoPause} from "react-icons/io5";
import {useState} from "react";

export function EmbedTrackCard({track}) {
    // console.log(`Track data for card: ${JSON.stringify(track)}`);

    //TODO - CSS small device uses 4px border-radius
    return (
        <Box
            // spacing={0}
            // direction={{xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' }}
            //    size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 3 }}
               sx={{borderRadius: '8px', border: 'none'}}>
            {/*<Box>*/}
                <iframe
                    data-testid="embed-iframe"
                    className="-mb-12 rounded-xl grow
                    border-0 border-black block"
                    src={"https://open.spotify.com/embed/track/" + track.id}
                    width="300"
                    height="400"
                    frameBorder="0" allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                />
            {/*</Box>*/}
        </Box>
    )
}
