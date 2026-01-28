import { $apiServer } from 'shared/api/apiServer';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { ResponseType } from 'shared/types/ResponseType';
import { paramsSerializer } from 'shared/lib/paramsSerializer';

const fetchArticleDetail = async <T>(url: ApiRoutes, slug?: string): Promise<ResponseType<T>> => {
    try {
        // TODO: Удалить после тестирования
        // await new Promise(resolve => setTimeout(resolve, 3000));

        const response = await $apiServer(`${url}/${slug}`, {
            params: { populate: 'main.preview,tags,category,seo' },
            paramsSerializer,
            // next: { revalidate: 3600 }
            // cache: 'force-cache',
        });

        return await response.json();
    } catch (error) {
        console.error('Fetch detail error:', error);
        // TODO: Пробрасывать ошибку везде
        throw error;
    }
};


export {
    fetchArticleDetail,
}
