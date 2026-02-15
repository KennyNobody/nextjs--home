import {
    fetchCategoryServer,
} from 'entities/Category';
import { DataLabels } from 'shared/labels/data';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { ArticleCategoryType } from 'entities/Category';
import { ResponseType } from 'shared/types/ResponseType';
import { FilterPostClient } from '../FilterPostClient/FilterPostClient';

export const FilterPostServer = async () => {
    const response: ResponseType<ArticleCategoryType[]> = await fetchCategoryServer(ApiRoutes.POST_CAT_LIST);

    if (!response || !response.data) {
        throw new Error(DataLabels.LOADING_ERROR);
    }

    const { data } = response;

    return (
        <FilterPostClient data={data} />
    );
};
