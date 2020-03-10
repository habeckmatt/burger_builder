import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-a9f55.firebaseio.com/'
});

export default instance;