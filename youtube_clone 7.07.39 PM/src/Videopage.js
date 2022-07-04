import React, { useContext } from 'react'
import VideoContext from './VideoContex';
import ThemeContext from './Theme_context';

const Videopage = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const { selectedvideo, setSlecetedvideo } = useContext(VideoContext);
    let videoid;
    if (selectedvideo.id.videoId) videoid = selectedvideo.id.videoId
    if (!videoid) {
        return (
            <p className='no_video'>
                Search for a video
            </p>
        );
    }
    return (
        <div className="video_player" style={theme} >
            <iframe
                title={videoid}
                className="video-iframe"
                src={`https://www.youtube.com/embed/${videoid}`}
            />
        </div>
    )
}

export default Videopage