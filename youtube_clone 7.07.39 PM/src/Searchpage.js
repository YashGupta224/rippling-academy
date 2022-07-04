import React, { useContext, useState, useEffect } from 'react'
import youtube_api from './youtube_api'
import Videolist from './Videolist';
import SearchContext from './SearchContext';
import ThemeContext from './Theme_context';

const Searchpage = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const KEY = "AIzaSyCgVaubX-ef7s_7a6psbkZOd57ryGeNLGI";
    const KEY2 = "AIzaSyBc-W1pWWOm24jV0bqDyMsPS-8PhPN03gA"
    const { keyword, setKeyword } = useContext(SearchContext);
    const [videos_list, setVideos_list] = useState([]);
    const onSearch = async (e) => {
        const response = await youtube_api.get("/search", {
            params: {
                part: "snippet",
                q: e,
                key: KEY2,
                maxResults: 10
            }
        })
        setVideos_list(response.data.items);
    }
    useEffect(() => { onSearch(keyword) }, [keyword]);
    return (
        <div style={theme}>
            <Videolist videos_list={videos_list} />
        </div>
    )
}

export default Searchpage