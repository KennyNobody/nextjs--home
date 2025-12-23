import { Metadata } from 'next';
import { RouterLinks } from 'shared/config/routerConfig';
import CaseListPublicPage from 'pages-app/CaseListPublicPage';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: RouterLinks.POSTS.title,
    }
}

export default function Page() {
    return (
        <CaseListPublicPage />
    );
}
