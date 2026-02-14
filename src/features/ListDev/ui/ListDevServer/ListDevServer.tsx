import {
    devActions,
    ArticleDevType,
} from 'entities/Dev';
import { DataLabels } from 'shared/labels/data';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { ResponseType } from 'shared/types/ResponseType';
import { fetchArticleList } from 'shared/api/fetchArticleList';
import { StoreInitializer } from 'shared/state/StoreInitializer';
import { ListDevClient } from '../ListDevClient/ListDevClient';

interface ListDevServerProps {
    isPreview?: boolean;
}

export const ListDevServer = async (props: ListDevServerProps) => {
    const { isPreview } = props;
    const response: ResponseType<ArticleDevType[]> = await fetchArticleList(ApiRoutes.DEVS_LIST);

    if (!response || !response.data) {
        throw new Error(DataLabels.LOADING_ERROR);
    }

    const { data, meta } = response;

    return (
        <>
            <StoreInitializer
                actions={[
                    devActions.setResponseData(response),
                ]}
            />

            <ListDevClient
                dataPrefetch={data}
                isPreview={isPreview}
                paginationPrefetch={meta?.pagination}
            />
        </>
    );
};
