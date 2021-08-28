import axios from 'axios';

const axiosApi = axios.create({
    baseURL: `https://quotes-cw-8-default-rtdb.europe-west1.firebasedatabase.app`,
});

export default axiosApi;