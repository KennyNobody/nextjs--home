import { ApiRoutes } from 'shared/api/apiEndpoints';
import { $apiServer } from 'shared/api/apiServer';
import { paramsSerializer } from 'shared/lib/paramsSerializer';
import { ApiRequestParams } from 'shared/types/ApiRequestParams';
import { ResponseType } from '../../../shared/types/ResponseType';
import { ArticleCategoryType } from '../model/types/ArticleCategory';

const fetchCategoryServer = async (
    url: ApiRoutes
): Promise<ResponseType<ArticleCategoryType[]>> => {
    try {
        const params: ApiRequestParams = {
            pagination: {
                page: 1,
                pageSize: 100,
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
    fetchCategoryServer,
}
