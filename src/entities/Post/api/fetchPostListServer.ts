import { $apiServer } from 'shared/api/apiServer';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { ResponseType } from 'shared/types/ResponseType';
import { ApiRequestParams } from '../../../shared/types/ApiRequestParams';
import { ArticlePostType } from '../model/types/ArticlePost';

interface FetchPostListOptions {
    page?: number;
    pageSize?: number;
    filters?: ApiRequestParams['filters'];
}

const fetchPostListServer = async (
    options: FetchPostListOptions = {},
): Promise<ResponseType<ArticlePostType[]>> => {
    const { page = 1, pageSize = 8, filters } = options;

    const params: ApiRequestParams = {
        pagination: {
            page,
            pageSize,
        },
        populate: ['main.preview', 'category'],
        sort: 'publishedAt:DESC',
    };

    if (filters) {
        params.filters = filters;
    }

    const response = await $apiServer(ApiRoutes.POSTS_LIST, { params });

    return response.json();
};
export {
    fetchPostListServer,
}
