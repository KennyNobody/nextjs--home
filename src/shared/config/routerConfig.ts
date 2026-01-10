import { PageLayoutMode } from 'shared/types/PageLayout';
import { ContentKeyType } from '../types/CommonTypes';

interface RouterItem {
    id: number;
    title: string;
    link: RouterConfig;
    layoutMode: PageLayoutMode;
    contentKey?: ContentKeyType;
}

type RouterLinksType = {
    [key in keyof typeof RouterConfig]: RouterItem;
}

enum RouterConfig {
    MAIN = '/',
    POSTS = '/posts',
    POSTS_DETAIL = 'posts',
    DEV = '/dev/',
    DEV_DETAIL = 'dev',
    PHOTO = '/photo/',
    PHOTO_DETAIL = 'photo',
    NOT_FOUND = '*',
}

const RouterLinks: RouterLinksType = {
    MAIN: {
        id: 1,
        title: 'Главная',
        link: RouterConfig.MAIN,
        layoutMode: PageLayoutMode.FRONT,
    },
    POSTS: {
        id: 2,
        title: 'Посты',
        link: RouterConfig.POSTS,
        layoutMode: PageLayoutMode.LIST,
        contentKey: ContentKeyType.POST,
    },
    POSTS_DETAIL: {
        id: 3,
        title: 'Посты',
        link: RouterConfig.POSTS_DETAIL,
        layoutMode: PageLayoutMode.DETAIL,
        contentKey: ContentKeyType.POST,
    },
    DEV: {
        id: 4,
        title: 'Разработка',
        link: RouterConfig.DEV,
        layoutMode: PageLayoutMode.LIST,
        contentKey: ContentKeyType.DEV,
    },
    DEV_DETAIL: {
        id: 5,
        title: 'Разработка',
        link: RouterConfig.DEV_DETAIL,
        layoutMode: PageLayoutMode.DETAIL,
        contentKey: ContentKeyType.DEV,
    },
    PHOTO: {
        id: 6,
        title: 'Фотография',
        link: RouterConfig.PHOTO,
        layoutMode: PageLayoutMode.LIST,
        contentKey: ContentKeyType.PHOTO,
    },
    PHOTO_DETAIL: {
        id: 7,
        title: 'Фотография',
        link: RouterConfig.PHOTO_DETAIL,
        layoutMode: PageLayoutMode.DETAIL,
        contentKey: ContentKeyType.PHOTO,
    },
    NOT_FOUND: {
        id: 8,
        title: 'Страница не найдена',
        link: RouterConfig.NOT_FOUND,
        layoutMode: PageLayoutMode.STATIC,
    }
}

export {
    type RouterItem,
    RouterLinks,
    RouterConfig,
    PageLayoutMode,
}
