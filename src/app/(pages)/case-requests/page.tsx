import { Metadata } from 'next';
import { RouterLinks } from 'shared/router/routerEndpoints';
import CaseListPage from 'pages-app/CaseListPublicPage';

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: RouterLinks.CASES_LIST.title,
    }
}

export default function Categories() {
    return (
        <CaseListPage />
    );
}
