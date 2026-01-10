// TODO: AddTests
import { RouterItem, RouterLinks } from '../config/routerConfig';

const findRouteByPathname = (pathname: string): RouterItem => {
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

    return RouterLinks.NOT_FOUND
}

const getClientRouteConfig = (pathname: string): RouterItem => {
    return findRouteByPathname(pathname)
}

const getServerRouteConfig = async(): Promise<RouterItem> => {
    const { headers } = await import('next/headers')
    const headersList = await headers()
    const pathname = headersList.get('x-pathname') || '/'

    return findRouteByPathname(pathname)
}

export {
    findRouteByPathname,
    getClientRouteConfig,
    getServerRouteConfig,
}
