import { AxiosError } from 'axios';
import { handleApiError } from 'shared/lib/apiErrorHandler';
import { paramsSerializer } from 'shared/lib/paramsSerializer';

const baseUrl = `${process.env.NEXT_PUBLIC_URL}/api/`;

interface FetchConfig extends RequestInit {
    params?: Record<string, any>;
    paramsSerializer?: (params: Record<string, any>) => string;
    cache?: 'force-cache';
}

const $apiServer = async (endpoint: string, config: FetchConfig = {}) => {
    const { params, ...fetchConfig } = config;

    let url = `${baseUrl}${endpoint}`;
    if (params) {
        url += `?${paramsSerializer(params)}`;
    }

    try {
        const response = await fetch(url, {
            ...fetchConfig,
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));

            const error = {
                response: {
                    status: response.status,
                    data: errorData,
                },
                config: {
                    url: endpoint,
                    method: fetchConfig.method || 'GET',
                },
            } as AxiosError;

            const method = (fetchConfig.method || 'GET').toUpperCase();
            const apiError = handleApiError(error, endpoint, method);

            return Promise.reject(apiError);
        }

        return response;
    } catch (error) {
        if (error && typeof error === 'object' && 'statusCode' in error) {
            return Promise.reject(error);
        }

        const axiosError = {
            response: undefined,
            config: {
                url: endpoint,
                method: fetchConfig.method || 'GET',
            },
        } as AxiosError;

        const method = (fetchConfig.method || 'GET').toUpperCase();
        const apiError = handleApiError(axiosError, endpoint, method);

        return Promise.reject(apiError);
    }
};

export {
    $apiServer,
};
