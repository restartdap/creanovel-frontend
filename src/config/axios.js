import axios from 'axios';

const url = process.env.REACT_APP_ENVIRONMENT === "development" ?
    process.env.REACT_APP_BACKEND_URL_DEV
    :
    process.env.REACT_APP_BACKEND_URL_PROD;
const axiosClient = axios.create({
    baseURL: url
});

export default axiosClient;