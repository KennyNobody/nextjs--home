import { $apiServer } from 'shared/api/apiServer';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { ResponseType } from 'shared/types/ResponseType';
import { paramsSerializer } from 'shared/lib/paramsSerializer';

const fetchList = async <T>(url: ApiRoutes, slug?: string): Promise<ResponseType<T>> => {
    try {
        const response = await $apiServer(`${url}/${slug}`, {
            params: { populate: 'main.preview,tags,category' },
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
    fetchList,
}
