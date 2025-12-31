import { ListPostClient } from '../ListPostClient/ListPostClient';
import { ArticlePostType, fetchPostServer, postActions } from 'entities/Post';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { ResponseType } from 'shared/types/ResponseType';
import { StoreInitializer } from 'shared/state/StoreInitializer';

interface ListPostServerProps {
    isPreview?: boolean;
}

export const ListPostServer = async (props: ListPostServerProps) => {
    const { isPreview } = props;
    const response: ResponseType<ArticlePostType[]> = await fetchPostServer(ApiRoutes.POSTS_LIST);

    // TODO Добавить обработку исключений
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
