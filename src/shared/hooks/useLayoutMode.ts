'use client'

import { usePathname } from 'next/navigation';
import { getRouteConfig } from '../helpers/getRouteConfig';
import { PageLayoutMode } from '../types/PageLayout';

const useLayoutModeKey = (): PageLayoutMode => {
    const pathname = usePathname();
    const route = getRouteConfig(pathname);

    return route.layoutMode || PageLayoutMode.STATIC;
};

export default useLayoutModeKey;
