import {
    categoryActions,
    fetchCategoryServer,
} from 'entities/Category';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { ArticleCategoryType } from 'entities/Category';
import { ResponseType } from 'shared/types/ResponseType';
import { StoreInitializer } from 'shared/state/StoreInitializer';
import { FilterDevClient } from '../FilterDevClient/FilterDevClient';

export const FilterDevServer = async () => {
    const response: ResponseType<ArticleCategoryType[]> = await fetchCategoryServer(ApiRoutes.DEV_TAG_LIST);

    // TODO Добавить обработку исключений
    const { data } = response;

    return (
        <>
            <StoreInitializer
                actions={[
                    categoryActions.setResponseData(response),
                ]}
            />

            <FilterDevClient
                dataPrefetch={data}
            />
        </>
    );
};
