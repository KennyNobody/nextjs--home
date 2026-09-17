import { ArticlePostType } from 'entities/Post';
import { DataLabels } from 'shared/labels/data';
import { fetchArticleDetail } from 'entities/Page';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { DetailContentClient } from '../DetailContentClient/DetailContentClient';

interface DetailContentServerProps {
    slug: string;
    isLoading?: boolean;
}

export const DetailContentServer = async (props: DetailContentServerProps) => {
    const {
        slug,
        isLoading,
    } = props;

    const response = await fetchArticleDetail<ArticlePostType>(ApiRoutes.POSTS_LIST, slug);

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
