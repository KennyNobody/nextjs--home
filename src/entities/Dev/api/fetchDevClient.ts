import { AxiosResponse } from 'axios';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { $apiClient } from 'shared/api/apiClient';
import { ResponseType } from 'shared/types/ResponseType';
import { ArticleDevType } from '../model/types/ArticleDev';
import { ApiRequestParams } from 'shared/types/ApiRequestParams';

export const fetchDevClient = async (route: ApiRoutes, params?: ApiRequestParams) => {
    const response: AxiosResponse<ResponseType<ArticleDevType[]>> = await $apiClient.get(route, { params });
    await new Promise(resolve => setTimeout(resolve, 10000));
    return response.data;
};
