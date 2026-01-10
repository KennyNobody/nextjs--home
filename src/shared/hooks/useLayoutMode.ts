'use client'

import { usePathname } from 'next/navigation';
import { RouterItem } from '../config/routerConfig';
import { getClientRouteConfig } from '../helpers/getRouteConfig';

const useRouteConfig = (): RouterItem => {
    const pathname = usePathname();
    return getClientRouteConfig(pathname);
};

export default useRouteConfig;
