import { AxiosResponse } from 'axios';
import { $apiClient } from 'shared/api/apiClient';
import { ResponseType } from 'shared/types/ResponseType';
import { ApiEInternalRoutes } from 'shared/api/apiEndpoints';
import { ApiRequestParams } from 'shared/types/ApiRequestParams';
import { ArticlePostType } from '../model/types/ArticlePost';

export const fetchPostListClient = async (route: ApiEInternalRoutes, params?: ApiRequestParams) => {
    const response: AxiosResponse<ResponseType<ArticlePostType[]>> = await $apiClient.get(route, { params });
    return response.data;
};
