import { $apiServer } from 'shared/api/apiServer';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { ResponseType } from 'shared/types/ResponseType';
import { paramsSerializer } from 'shared/lib/paramsSerializer';
import { ApiRequestParams } from '../types/ApiRequestParams';

const fetchArticleList = async <T>(url: ApiRoutes): Promise<ResponseType<T>> => {
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
            // next: { revalidate: 3600 }
            // cache: 'force-cache',
        });

        return await response.json();
    } catch (error) {
        console.error('Fetch detail error:', error);
        throw error;
    }
};


export {
    fetchArticleList,
}
