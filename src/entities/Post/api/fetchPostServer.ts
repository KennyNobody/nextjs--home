import { ApiRoutes } from 'shared/api/apiEndpoints';
import { $apiServer } from 'shared/api/apiServer';
import { paramsSerializer } from 'shared/lib/paramsSerializer';
import { ApiRequestParams } from 'shared/types/ApiRequestParams';
import { ResponseType } from '../../../shared/types/ResponseType';
import { ArticlePostType } from '../model/types/ArticlePost';

const fetchPostServer = async (
    url: ApiRoutes
): Promise<ResponseType<ArticlePostType[]>> => {
    try {
        const params: ApiRequestParams = {
            pagination: {
                page: 1,
                pageSize: 8,
            },
            populate: 'main.preview,category',
            sort: 'publishedAt:DESC',
        };

        const response = await $apiServer(url, {
            params,
            paramsSerializer,
            // next: { revalidate: 10 }
            // cache: 'force-cache',
        });

        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};


export {
    fetchPostServer,
}
