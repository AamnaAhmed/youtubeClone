import React from 'react'
import { Stack, Box } from "@mui/material"
import { VideoCard,ChannelCard } from "./"

const Videos = ({ videos, diraction }) => {
    if(!videos?.length) return "Loading..."
    console.log(videos)
    return (
        <Stack direction={ diraction||"row"} flexWrap="wrap" justifyContent="center" alignItems="start" gap={2}>
          {videos.map((item, ind) => (
            <Box key={ind}>
              {item.id.videoId && <VideoCard video={item}/>}
              {item.id.channelId && <ChannelCard ChannelDetail={item}/>}
            
            </Box>
    ))}
        
        </Stack>
    )
}

export default Videos
