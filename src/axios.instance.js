import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.chiquinhobrandao.com.br'
});

export default instance;