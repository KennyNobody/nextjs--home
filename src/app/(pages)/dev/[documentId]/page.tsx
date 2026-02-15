import { Metadata } from 'next';
import { ArticleDevType } from 'entities/Dev';
import { PageDetail } from 'pagesApp/PageDetail';
import { fetchArticleDetail } from 'entities/Page';
import { RequestProps } from 'shared/types/Request';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { ResponseType } from 'shared/types/ResponseType';
import { ContentKeyType } from 'shared/types/CommonTypes';
import { notFound } from 'next/dist/client/components/not-found';
import { generatePageMetadata } from 'shared/lib/generatePageMetadata';

async function getPageData(documentId: string): Promise<ResponseType<ArticleDevType>> {
    return await fetchArticleDetail(ApiRoutes.DEVS_LIST, documentId);
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
            mode={ContentKeyType.DEV}
        />
    )
}
