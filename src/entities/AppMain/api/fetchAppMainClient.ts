import { AxiosResponse } from 'axios';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { $apiClient } from 'shared/api/apiClient';
import { AppMainResponseType } from '../model/types/AppMainResponse';

export const fetchAppMainClient = async () => {
    const params = { populate: '*' };
    const response: AxiosResponse<AppMainResponseType> = await $apiClient.get(ApiRoutes.MAIN, { params });
    return response.data;
};
