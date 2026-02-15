import {
    photoActions,
    ArticlePhotoType,
} from 'entities/Photo';
import { DataLabels } from 'shared/labels/data';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { ResponseType } from 'shared/types/ResponseType';
import { fetchArticleList } from 'shared/api/fetchArticleList';
import { StoreInitializer } from 'shared/state/StoreInitializer';
import { ListPhotoClient } from '../ListPhotoClient/ListPhotoClient';

interface ListPhotoServerProps {
    isPreview?: boolean;
}

export const ListPhotoServer = async (props: ListPhotoServerProps) => {
    const { isPreview } = props;
    const response: ResponseType<ArticlePhotoType[]> = await fetchArticleList(ApiRoutes.PHOTO_LIST);

    if (!response || !response.data) {
        throw new Error(DataLabels.LOADING_ERROR);
    }

    const { data, meta } = response;

    return (
        <>
            <StoreInitializer
                actions={[
                    photoActions.setResponseData(response),
                ]}
            />

            <ListPhotoClient
                dataPrefetch={data}
                isPreview={isPreview}
                paginationPrefetch={meta?.pagination}
            />
        </>
    );
};
