import { AxiosResponse } from 'axios';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { $apiClient } from 'shared/api/apiClient';
import { PageResponseType } from 'shared/types/CommonTypes';

export const fetchPageClient = async (route: ApiRoutes) => {
    const params = { populate: '*' };
    const response: AxiosResponse<PageResponseType> = await $apiClient.get(route, { params });
    return response.data;
};
