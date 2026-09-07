import {
    postActions,
    ArticlePostType, fetchPostListServer,
} from 'entities/Post';
import { DataLabels } from 'shared/labels/data';
import { ResponseType } from 'shared/types/ResponseType';
import { StoreInitializer } from 'shared/state/StoreInitializer';
import { ListPostClient } from '../ListPostClient/ListPostClient';

interface ListPostServerProps {
    isPreview?: boolean;
}

export const ListPostServer = async (props: ListPostServerProps) => {
    const { isPreview } = props;
    const response: ResponseType<ArticlePostType[]> = await fetchPostListServer();

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
