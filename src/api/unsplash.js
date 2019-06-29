import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 0fafd09f047419a7c3b319423df03099a3ba496bfefcc1b2b8acbbda18048048'
    }
});