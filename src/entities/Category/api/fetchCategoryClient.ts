import { AxiosResponse } from 'axios';
import { $apiClient } from 'shared/api/apiClient';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { ResponseType } from 'shared/types/ResponseType';
import { ApiRequestParams } from 'shared/types/ApiRequestParams';
import { ArticleCategoryType } from '../model/types/ArticleCategory';

export const fetchCategoryClient = async (route: ApiRoutes, params?: ApiRequestParams) => {
    const response: AxiosResponse<ResponseType<ArticleCategoryType[]>> = await $apiClient.get(route, { params });
    return response.data;
};
