import { AxiosResponse } from 'axios';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { $apiClient } from 'shared/api/apiClient';
import { ResponseType } from 'shared/types/ResponseType';
import { ApiRequestParams } from 'shared/types/ApiRequestParams';
import { ArticlePhotoType } from '../model/types/ArticlePhoto';

export const fetchPhotoClient = async (route: ApiRoutes, params?: ApiRequestParams) => {
    const response: AxiosResponse<ResponseType<ArticlePhotoType[]>> = await $apiClient.get(route, { params });
    return response.data;
};
