// import { Metadata } from 'next';
import { Metadata } from 'next';
import FrontPage from 'pages-app/FrontPage';
// import { fetchFrontPageData, FrontPageResponseType } from 'pages/FrontPage';
// import { fetchAppData } from './services/fetchAppData';
// import { AppResponseType } from './model/types/App';

// export async function generateMetadata(): Promise<Metadata> {
//     const response: FrontPageResponseType = await fetchFrontPageData({});
//     const meta = response.data.seo;
//
//     return {
//         title: meta.metaTitle,
//         description: meta.metaDescription,
//         keywords: meta.keywords,
//         other: {
//             'other': JSON.stringify(meta.structuredData),
//         },
//     }
// }

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Главная страница',
        //  description: meta.metaDescription,
        //  keywords: meta.keywords,
        //  other: {
        //  'other': JSON.stringify(meta.structuredData),
        // },
    }
}

export default function Home() {
    // const response: AppResponseType = await fetchAppData({});

    return <FrontPage />;
}
