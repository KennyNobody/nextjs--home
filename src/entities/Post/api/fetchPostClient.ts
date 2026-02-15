import { AxiosResponse } from 'axios';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { $apiClient } from 'shared/api/apiClient';
import { ResponseType } from 'shared/types/ResponseType';
import { ApiRequestParams } from 'shared/types/ApiRequestParams';
import { ArticlePostType } from '../model/types/ArticlePost';

export const fetchPostClient = async (route: ApiRoutes, params?: ApiRequestParams) => {
    const response: AxiosResponse<ResponseType<ArticlePostType[]>> = await $apiClient.get(route, { params });
    return response.data;
};
