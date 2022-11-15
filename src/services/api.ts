import axios from 'axios';
import { PREFIX_AUTH } from 'utils/constants';

export const api = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL
});

export const configApi = () => {
    const token = JSON.parse(localStorage.getItem(`${PREFIX_AUTH}:token`) || '')

    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
}

const responseHandler = (response: any) => {
    return response;
};

// Intercerpetor de requisições
api.interceptors.request.use((config) => {
    let token = localStorage.getItem(`${PREFIX_AUTH}:token`);

    if (token !== null) {
        config.headers = {
            'Authorization': `Bearer ${JSON.parse(token)}`,
        }
    }

    return config;
}, (error) => Promise.reject(error));

api.interceptors.response.use(responseHandler);
