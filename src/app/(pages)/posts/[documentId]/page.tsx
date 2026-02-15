import { Metadata } from 'next';
import { PageDetail } from 'pagesApp/PageDetail';
import { ArticlePostType } from 'entities/Post';
import { fetchArticleDetail } from 'entities/Page';
import { RequestProps } from 'shared/types/Request';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { ResponseType } from 'shared/types/ResponseType';
import { ContentKeyType } from 'shared/types/CommonTypes';
import { notFound } from 'next/dist/client/components/not-found';
import { generatePageMetadata } from 'shared/lib/generatePageMetadata';

async function getPageData(documentId: string): Promise<ResponseType<ArticlePostType>> {
    return await fetchArticleDetail(ApiRoutes.POSTS_LIST, documentId);
}

export async function generateMetadata({ params }: RequestProps): Promise<Metadata> {
    const { documentId } = await params;
    const response = await getPageData(documentId);
    return generatePageMetadata(response?.data?.seo);
}

export default async function PageApp( { params }: RequestProps) {
    const { documentId } = await params;

    if (!documentId) notFound();

    return (
        <PageDetail
            slug={documentId}
            mode={ContentKeyType.POST}
        />
    )
}
