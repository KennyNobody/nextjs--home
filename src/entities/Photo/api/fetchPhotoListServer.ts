import { $apiServer } from 'shared/api/apiServer';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { ResponseType } from 'shared/types/ResponseType';
import { ApiRequestParams } from '../../../shared/types/ApiRequestParams';
import { ArticlePhotoType } from '../model/types/ArticlePhoto';

interface FetchPhotoListOptions {
    page?: number;
    pageSize?: number;
}

const fetchPhotoListServer = async (
    options: FetchPhotoListOptions = {},
): Promise<ResponseType<ArticlePhotoType[]>> => {
    const { page = 1, pageSize = 8 } = options;

    const params: ApiRequestParams = {
        pagination: {
            page,
            pageSize,
        },
        populate: 'main.preview',
        sort: 'publishedAt:DESC',
    };

    const response = await $apiServer(ApiRoutes.PHOTO_LIST, { params });

    return response.json();
};
export {
    fetchPhotoListServer,
}
