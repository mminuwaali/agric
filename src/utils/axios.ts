import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
});

api.interceptors.response.use(({ data }) => data, err => {
    console.error(err);
    throw new Error(err);
});


export default api;
