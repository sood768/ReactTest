
import axios from 'axios';
import { SITE_URL } from './api'

const requestInterceptor = (config) => ({
    ...config,
    headers: {
        ...config.headers,
        'authorization': 'Bearer ' + localStorage.getItem('access_token'),
    },
});

class HttpClient {
    constructor() {
        const options = { baseURL: SITE_URL };
        const instance = axios.create(options);

        instance.interceptors.request.use(requestInterceptor);

        axios.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            return Promise.reject(error);
        });
        return instance;
    }
}
export default HttpClient;