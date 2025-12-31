import { Metadata } from 'next';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { fetchPageServer, Page, PageMode } from 'entities/Page';
import { generatePageMetadata } from 'shared/lib/generatePageMetadata';

async function getPageData() {
    return await fetchPageServer(ApiRoutes.PAGE_POST);
}

export async function generateMetadata(): Promise<Metadata> {
    const response = await getPageData();
    return generatePageMetadata(response?.data?.seo);
}

export default async function PageApp() {
    const response = await getPageData();

    return (
        <Page
            mode={PageMode.INDEX}
            data={response?.data}
        />
    )
}
