import {
    devActions,
    ArticleDevType,
    fetchDevServer,
} from 'entities/Dev';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { ResponseType } from 'shared/types/ResponseType';
import { StoreInitializer } from 'shared/state/StoreInitializer';
import { ListDevClient } from '../ListDevClient/ListDevClient';

interface ListDevServerProps {
    isPreview?: boolean;
}

export const ListDevServer = async (props: ListDevServerProps) => {
    const { isPreview } = props;
    const response: ResponseType<ArticleDevType[]> = await fetchDevServer(ApiRoutes.DEVS_LIST);

    // TODO Добавить обработку исключений
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
