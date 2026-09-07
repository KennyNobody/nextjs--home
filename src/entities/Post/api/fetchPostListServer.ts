import { $apiServer } from 'shared/api/apiServer';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { ResponseType } from 'shared/types/ResponseType';
import { ApiRequestParams } from '../../../shared/types/ApiRequestParams';
import { ArticlePostType } from '../model/types/ArticlePost';

interface FetchPostListOptions {
    page?: number;
    pageSize?: number;
}

const fetchPostListServer = async (
    options: FetchPostListOptions = {},
): Promise<ResponseType<ArticlePostType[]>> => {
    const { page = 1, pageSize = 8 } = options;

    const params: ApiRequestParams = {
        pagination: {
            page,
            pageSize,
        },
        populate: 'main.preview',
        sort: 'publishedAt:DESC',
    };

    const response = await $apiServer(ApiRoutes.POSTS_LIST, { params });

    return response.json();
};
export {
    fetchPostListServer,
}
