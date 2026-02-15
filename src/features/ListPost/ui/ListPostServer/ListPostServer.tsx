import {
    postActions,
    ArticlePostType,
} from 'entities/Post';
import { DataLabels } from 'shared/labels/data';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { ResponseType } from 'shared/types/ResponseType';
import { fetchArticleList } from 'shared/api/fetchArticleList';
import { StoreInitializer } from 'shared/state/StoreInitializer';
import { ListPostClient } from '../ListPostClient/ListPostClient';

interface ListPostServerProps {
    isPreview?: boolean;
}

export const ListPostServer = async (props: ListPostServerProps) => {
    const { isPreview } = props;
    const response: ResponseType<ArticlePostType[]> = await fetchArticleList(ApiRoutes.POSTS_LIST);

    if (!response || !response.data) {
        throw new Error(DataLabels.LOADING_ERROR);
    }

    const { data, meta } = response;

    return (
        <>
            <StoreInitializer
                actions={[
                    postActions.setResponseData(response),
                ]}
            />

            <ListPostClient
                dataPrefetch={data}
                isPreview={isPreview}
                paginationPrefetch={meta?.pagination}
            />
        </>
    );
};
