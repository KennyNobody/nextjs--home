import { ApiRoutes } from 'shared/api/apiEndpoints';
import { $apiServer } from 'shared/api/apiServer';
import { paramsSerializer } from 'shared/lib/paramsSerializer';
import { ApiRequestParams } from 'shared/types/ApiRequestParams';
import { ResponseType } from '../../../shared/types/ResponseType';
import { ArticleDevType } from '../model/types/ArticleDev';

const fetchDevServer = async (
    url: ApiRoutes
): Promise<ResponseType<ArticleDevType[]>> => {
    try {
        // TODO: Удалить после тестирования
        // await new Promise(resolve => setTimeout(resolve, 10000));

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
            next: { revalidate: 10 }
        });

        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};


export {
    fetchDevServer,
}
