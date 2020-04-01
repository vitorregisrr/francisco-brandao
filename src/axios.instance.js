import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://franb.sitesemproducao.com/api',
    headers: {'Authorization': 'Bearer'}
});

export default instance;