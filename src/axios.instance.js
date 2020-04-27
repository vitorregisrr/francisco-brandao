import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://franb.sitesemproducao.com'
});

export default instance;