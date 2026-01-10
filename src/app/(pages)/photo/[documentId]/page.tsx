import { Metadata } from 'next';
import { PageDetail } from 'pagesApp/PageDetail';
import { ArticlePhotoType } from 'entities/Photo';
import { fetchArticleDetail } from 'entities/Page';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { ResponseType } from 'shared/types/ResponseType';
import { ContentKeyType } from 'shared/types/CommonTypes';
import { generatePageMetadata } from 'shared/lib/generatePageMetadata';

// TODO: Возможно вынести в shared
type PageProps = {
    params: Promise<{ documentId: string }>;
};

async function getPageData(documentId: string): Promise<ResponseType<ArticlePhotoType>> {
    return await fetchArticleDetail(ApiRoutes.PHOTO_LIST, documentId);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { documentId } = await params;
    const response = await getPageData(documentId);
    return generatePageMetadata(response?.data?.seo);
}

export default async function PageApp( { params }: PageProps) {
    const { documentId } = await params;

    if (!documentId) {
        // TODO: Показать 404
    }

    return (
        <PageDetail
            slug={documentId}
            mode={ContentKeyType.PHOTO}
        />
    )
}
