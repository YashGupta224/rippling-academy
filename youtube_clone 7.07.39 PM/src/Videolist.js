import React from 'react'
import VideoCard from './VideoCard';

const Videolist = ({ videos_list }) => {
    console.log("videos_list", videos_list);
    const list = videos_list.map((video) => {
        return (
            <React.Fragment key={video.id.videoId} >
                <VideoCard video={video} />
            </React.Fragment>
        );
    })
    return (
        <div className='video_list'> {list} </div>
    )
}

export default Videolist