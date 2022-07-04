import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import VideoContext from './VideoContex';

const VideoCard = ({ video }) => {
    const { selectedvideo, setSlecetedvideo } = useContext(VideoContext);
    return (
        < div className="img_container" >
            <div className='video_card' >
                <div className="thumbnail">
                    <Link to={`/video/${video.id.videoId}`} onClick={() => { setSlecetedvideo(video) }} >
                        <img src={video.snippet.thumbnails.high.url} alt="" ></img>
                    </Link>
                </div>
                <div className='text'>
                    <div className="text">{video.snippet.channelTitle}</div>
                    <div className='text'>{video.snippet.title}</div>

                </div>
            </div>
            <hr />
        </div>
    )
}

export default VideoCard