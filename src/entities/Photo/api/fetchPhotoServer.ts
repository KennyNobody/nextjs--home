import { $apiServer } from 'shared/api/apiServer';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { paramsSerializer } from 'shared/lib/paramsSerializer';
import { ApiRequestParams } from 'shared/types/ApiRequestParams';
import { ResponseType } from '../../../shared/types/ResponseType';
import { ArticlePhotoType } from '../model/types/ArticlePhoto';

const fetchPhotoServer = async (
    url: ApiRoutes
): Promise<ResponseType<ArticlePhotoType[]>> => {
    try {
        // TODO: Удалить после тестирования
        // await new Promise(resolve => setTimeout(resolve, 10000));

        const params: ApiRequestParams = {
            pagination: {
                page: 1,
                pageSize: 8,
            },
            populate: 'main.preview',
            sort: 'publishedAt:DESC',
        };

        const response = await $apiServer(url, {
            params,
            paramsSerializer,
            // next: { revalidate: 10 },
            // cache: 'force-cache',
        });

        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};


export {
    fetchPhotoServer,
}
