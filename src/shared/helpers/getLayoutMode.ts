import { getRouteConfig } from './getRouteConfig';
import { PageLayoutMode } from '../types/PageLayout';
import { headers } from 'next/dist/server/request/headers';

export async function getLayoutMode(): Promise<PageLayoutMode> {
    const headersList = await headers();
    const pathname = headersList.get('x-pathname') || '/';
    const route = getRouteConfig(pathname);

    return route.layoutMode || PageLayoutMode.STATIC;
}
