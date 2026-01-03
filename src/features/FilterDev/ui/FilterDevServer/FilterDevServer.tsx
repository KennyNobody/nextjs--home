import {
    fetchCategoryServer,
} from 'entities/Category';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { ArticleCategoryType } from 'entities/Category';
import { ResponseType } from 'shared/types/ResponseType';
import { FilterDevClient } from '../FilterDevClient/FilterDevClient';

export const FilterDevServer = async () => {
    const response: ResponseType<ArticleCategoryType[]> = await fetchCategoryServer(ApiRoutes.DEV_TAG_LIST);

    // TODO Добавить обработку исключений
    const { data } = response;

    return (
        <FilterDevClient data={data} />
    );
};
