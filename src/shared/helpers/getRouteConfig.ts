// TODO: AddTests
import { RouterItem, RouterLinks } from '../config/routerConfig';

const getRouteConfig = (pathname: string) => {
    const routes: Record<string, RouterItem> = {
        '/': RouterLinks.MAIN,
        '/posts': RouterLinks.POSTS,
        '/dev': RouterLinks.DEV,
        '/photo': RouterLinks.PHOTO,
    }

    if (routes[pathname]) return routes[pathname]

    if (pathname.startsWith('/posts/')) return RouterLinks.POSTS_DETAIL
    if (pathname.startsWith('/dev/')) return RouterLinks.DEV_DETAIL
    if (pathname.startsWith('/photo/')) return RouterLinks.PHOTO_DETAIL

    return RouterLinks.NOT_FOUND;
};

export {
    getRouteConfig,
};
