import {
    fetchCategoryServer,
} from 'entities/Category';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { ArticleCategoryType } from 'entities/Category';
import { ResponseType } from 'shared/types/ResponseType';
import { FilterPostClient } from '../FilterPostClient/FilterPostClient';

export const FilterPostServer = async () => {
    const response: ResponseType<ArticleCategoryType[]> = await fetchCategoryServer(ApiRoutes.POST_CAT_LIST);

    // TODO Добавить обработку исключений
    const { data } = response;

    return (
        <FilterPostClient data={data} />
    );
};
