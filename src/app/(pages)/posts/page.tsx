import { Metadata } from 'next';
import { RouterLinks } from 'shared/config/routerConfig';
import { StoreInitializer } from 'shared/state/StoreInitializer';
import { fetchPostServer } from 'entities/Post';
import { ApiRoutes } from 'shared/api/apiEndpoints';

export const dynamic = 'force-dynamic';

// async function getPostList() {
//     return await fetchPostServer(ApiRoutes.POSTS_LIST);
// }

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: RouterLinks.POSTS.title,
    }
}

export default async function Page() {
    // const responseList = await getPostList();

    return (
        <>
            {/*<StoreInitializer*/}
            {/*    postData={responseList}*/}
            {/*/>;*/}
            <p>
                Страница постов
            </p>
            {/*<CaseListPublicPage />;*/}
        </>
    )
}
