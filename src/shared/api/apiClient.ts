import axios, { AxiosError } from 'axios';
import { handleApiError } from 'shared/lib/apiErrorHandler';
import { paramsSerializer } from 'shared/lib/paramsSerializer';

const baseUrl = `${process.env.NEXT_PUBLIC_URL}/api/`;

const $apiClient = axios.create({
    baseURL: baseUrl,
    paramsSerializer,
});

$apiClient.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        const endpoint = error.config?.url || 'unknown';
        const method = error.config?.method?.toUpperCase() || 'GET';
        const apiError = handleApiError(error, endpoint, method);

        return Promise.reject(apiError);
    }
);

export {
    $apiClient,
};
