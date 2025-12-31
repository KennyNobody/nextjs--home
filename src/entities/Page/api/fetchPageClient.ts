import { AxiosResponse } from 'axios';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { $apiClient } from 'shared/api/apiClient';
import { PageType } from '../model/types/Page';
import { ResponseType } from 'shared/types/ResponseType';

export const fetchPageClient = async (route: ApiRoutes) => {
    const params = { populate: '*' };
    const response: AxiosResponse<ResponseType<PageType>> = await $apiClient.get(route, { params });
    return response.data;
};
