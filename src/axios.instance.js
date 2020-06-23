import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://franb.sitesemproducao.com'
});

export default instance;