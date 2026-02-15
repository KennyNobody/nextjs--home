import Page from 'pagesApp/Page';
import { Metadata } from 'next';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { fetchPageIndex } from 'entities/Page';
import { generatePageMetadata } from 'shared/lib/generatePageMetadata';

async function getPageData() {
    return await fetchPageIndex(ApiRoutes.PAGE_PHOTO);
}

export async function generateMetadata(): Promise<Metadata> {
    const response = await getPageData();
    return generatePageMetadata(response?.data?.seo);
}

export default async function PageApp() {
    const response = await getPageData();

    return (
        <Page
            mode={'index'}
            data={response?.data}
        />
    )
}
