import { ApiRoutes } from 'shared/api/apiEndpoints';
import { $apiServer } from 'shared/api/apiServer';
import { paramsSerializer } from 'shared/lib/paramsSerializer';

const fetchPageDetail = async (url: ApiRoutes, slug?: string) => {
    try {
        const response = await $apiServer(`${url}/${slug}`, {
            params: { populate: 'main.preview,tags,category,seo' },
            paramsSerializer,
            next: { revalidate: 3600 }
        });

        return await response.json();
    } catch (error) {
        console.error(error);
        return error;
    }
};


export {
    fetchPageDetail,
}
