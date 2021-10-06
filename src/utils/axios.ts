import axios from 'axios';

const api = axios.create({
    baseURL: 'https://gfit-ef23c-default-rtdb.firebaseio.com',
});

export { api };