import { Metadata } from 'next';
import FrontPage from 'pages-app/FrontPage';
import { fetchPageServer } from '../entities/Page';
import { ApiRoutes } from '../shared/api/apiEndpoints';
import { generatePageMetadata } from '../shared/lib/generatePageMetadata';

async function getPageData() {
    return await fetchPageServer(ApiRoutes.PAGE_FRONT);
}

export async function generateMetadata(): Promise<Metadata> {
    const response = await getPageData();
    return generatePageMetadata(response?.data?.seo);
}

export default async function Page() {
    const response = await getPageData();
    return <FrontPage data={response?.data} />;
}
