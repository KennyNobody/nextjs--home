import {
    fetchPageIndex,
} from 'entities/Page';
import { Metadata } from 'next';
import { Page } from 'pages/Page';
import { ApiRoutes } from '../shared/api/apiEndpoints';
import { generatePageMetadata } from '../shared/lib/generatePageMetadata';

async function getPageData() {
    return await fetchPageIndex(ApiRoutes.PAGE_FRONT);
}

export async function generateMetadata(): Promise<Metadata> {
    const response = await getPageData();
    return generatePageMetadata(response?.data?.seo);
}

export default async function PageApp() {
    const response  = await getPageData();

    return (
        <Page
            mode={'front'}
            data={response?.data}
        />
    );
}
