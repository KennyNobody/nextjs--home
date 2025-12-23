import { Metadata } from 'next';
import { RouterLinks } from 'shared/config/routerConfig';
import CaseDetailPage from 'pages-app/CaseDetailPage';

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: RouterLinks.TEAMS.title,
    }
}

export default function Page() {
    return (
        <CaseDetailPage />
    );
}
