import { ApiRoutes } from 'shared/api/apiEndpoints';
import { $apiServer } from 'shared/api/apiServer';
import { paramsSerializer } from 'shared/lib/paramsSerializer';

const fetchAppMainServer = async () => {
    try {
        const response = await $apiServer(ApiRoutes.MAIN, {
            params: {
                populate: '*',
            },
            paramsSerializer,
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
};


export {
    fetchAppMainServer,
}
