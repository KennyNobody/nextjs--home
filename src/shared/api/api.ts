import axios, { AxiosError } from 'axios';
import { handleApiError } from 'shared/lib/apiErrorHandler';
import { paramsSerializer } from 'shared/lib/paramsSerializer';

const baseUrl = `${process.env.NEXT_PUBLIC_MEDIA_URL}/api/`;

const $api = axios.create({
    baseURL: baseUrl,
    paramsSerializer,
});

$api.interceptors.request.use((config) => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('jwt');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    return config;
});

$api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        const endpoint = error.config?.url || 'unknown';
        const method = error.config?.method?.toUpperCase() || 'GET';

        const apiError = handleApiError(error, endpoint, method);

        // Возвращаем отклоненный промис с структурированной ошибкой
        return Promise.reject(apiError);
    }
);

export {
    $api,
};
