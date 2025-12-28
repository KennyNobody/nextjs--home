import { ApiRoutes } from 'shared/api/apiEndpoints';
import { $apiServer } from 'shared/api/apiServer';
import { paramsSerializer } from 'shared/lib/paramsSerializer';

const fetchPostServer = async (url: ApiRoutes) => {
    try {
        const response = await $apiServer(url, {
            params: { populate: '*' },
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
    fetchPostServer,
}
