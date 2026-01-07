import { Metadata } from 'next';
import { PageDetail } from 'pages/PageDetail';
import { ArticleDevType } from 'entities/Dev';
import { fetchPageDetail } from 'entities/Page';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { ResponseType } from 'shared/types/ResponseType';
import { generatePageMetadata } from 'shared/lib/generatePageMetadata';

// TODO: Возможно вынести в shared
type PageProps = {
    params: Promise<{ documentId: string }>;
};

async function getPageData(documentId: string) {
    return await fetchPageDetail(ApiRoutes.DEVS_LIST, documentId);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { documentId } = await params;
    const response = await getPageData(documentId);
    return generatePageMetadata(response?.data?.seo);
}

export default async function PageApp( { params }: PageProps) {
    const { documentId } = await params;
    const response: ResponseType<ArticleDevType> = await getPageData(documentId);

    if (!documentId) {
        // TODO: Показать 404
    }
    return (
        <PageDetail
            data={response?.data}
        />
    )
}
