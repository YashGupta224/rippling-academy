import React, { useContext, useState, useEffect } from 'react'

import youtube_api from './youtube_api'
import Videolist from './Videolist';
import ThemeContext from './Theme_context';


const Homepage = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const KEY = "AIzaSyCgVaubX-ef7s_7a6psbkZOd57ryGeNLGI";
    const KEY2 = "AIzaSyBc-W1pWWOm24jV0bqDyMsPS-8PhPN03gA";
    const [videos_list, setVideos_list] = useState([]);
    const onRefresh = async () => {
        const response = await youtube_api.get("/search", {
            params: {
                part: "snippet",
                chart: "mostPopular",
                key: KEY2,
                maxResults: 20
            }
        })
        setVideos_list(response.data.items);
    }
    // useEffect(() => { onRefresh() }, []);
    return (
        <div style={theme}>
            <h1 className='heading'>Trending videos</h1>
            <Videolist videos_list={videos_list} />
        </div>
    )
}

export default Homepage