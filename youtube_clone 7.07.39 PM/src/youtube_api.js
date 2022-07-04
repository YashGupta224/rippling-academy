import axios from 'axios';

const KEY = "AIzaSyCgVaubX-ef7s_7a6psbkZOd57ryGeNLGI";

export default axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    pramas: {
        part: 'snippet',
        maxResult: 5,
        key: KEY
    }
})