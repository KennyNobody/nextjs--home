import { ArticleDevType, } from 'entities/Dev';
import { ArticlePostType } from 'entities/Post';
import { DataLabels } from 'shared/labels/data';
import { ArticlePhotoType } from 'entities/Photo';
import { fetchArticleDetail } from 'entities/Page';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { ResponseType } from 'shared/types/ResponseType';
import { ContentKeyType } from 'shared/types/CommonTypes';
import { DetailContentClient } from '../DetailContentClient/DetailContentClient';

interface DetailContentServerProps {
    slug: string;
    isLoading?: boolean;
    mode: ContentKeyType;
}

const fetchRequests = {
    [ContentKeyType.DEV]: (slug: string): Promise<ResponseType<ArticleDevType>> => fetchArticleDetail<ArticleDevType>(ApiRoutes.DEVS_LIST, slug),
    [ContentKeyType.PHOTO]: (slug: string): Promise<ResponseType<ArticlePhotoType>> => fetchArticleDetail<ArticlePhotoType>(ApiRoutes.PHOTO_LIST, slug),
    [ContentKeyType.POST]: (slug: string): Promise<ResponseType<ArticlePostType>> => fetchArticleDetail<ArticlePostType>(ApiRoutes.POSTS_LIST, slug),
} as const;

export const DetailContentServer = async (props: DetailContentServerProps) => {
    const {
        slug,
        mode,
        isLoading,
    } = props;

    const fetchFunction = fetchRequests[mode];
    const response = await fetchFunction(slug);

    if (!response || !response.data) {
        throw new Error(DataLabels.LOADING_ERROR);
    }

    const { data } = response;

    return (
        <DetailContentClient
            data={data}
            isLoading={isLoading}
        />
    );
};
