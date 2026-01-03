import {
    photoActions,
    ArticlePhotoType,
    fetchPhotoServer,
} from 'entities/Photo';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { ResponseType } from 'shared/types/ResponseType';
import { StoreInitializer } from 'shared/state/StoreInitializer';
import { ListPhotoClient } from '../ListPhotoClient/ListPhotoClient';

interface ListPhotoServerProps {
    isPreview?: boolean;
}

export const ListPhotoServer = async (props: ListPhotoServerProps) => {
    const { isPreview } = props;
    const response: ResponseType<ArticlePhotoType[]> = await fetchPhotoServer(ApiRoutes.PHOTO_LIST);

    // TODO Добавить обработку исключений
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
