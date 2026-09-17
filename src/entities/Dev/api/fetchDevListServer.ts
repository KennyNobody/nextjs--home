import { $apiServer } from 'shared/api/apiServer';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { ResponseType } from 'shared/types/ResponseType';
import { ApiRequestParams } from '../../../shared/types/ApiRequestParams';
import { ArticleDevType } from '../model/types/ArticleDev';

interface FetchDevListOptions {
    page?: number;
    pageSize?: number;
}

const fetchDevListServer = async (
    options: FetchDevListOptions = {},
): Promise<ResponseType<ArticleDevType[]>> => {
    const { page = 1, pageSize = 8 } = options;

    const params: ApiRequestParams = {
        pagination: {
            page,
            pageSize,
        },
        populate: 'main.preview',
        sort: 'publishedAt:DESC',
    };

    const response = await $apiServer(ApiRoutes.DEVS_LIST, { params });

    return response.json();
};
export {
    fetchDevListServer,
}
