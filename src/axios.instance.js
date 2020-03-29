import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://',
    headers: {'Authorization': 'Bearer'}
});

export default instance;