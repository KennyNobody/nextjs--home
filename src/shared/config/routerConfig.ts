import { PageLayoutMode } from 'shared/types/PageLayout';

interface RouterItem {
    id: number;
    title: string;
    link: RouterConfig;
    layoutMode: PageLayoutMode;
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
    },
    POSTS_DETAIL: {
        id: 3,
        title: 'Посты',
        link: RouterConfig.POSTS_DETAIL,
        layoutMode: PageLayoutMode.DETAIL,
    },
    DEV: {
        id: 4,
        title: 'Разработка',
        link: RouterConfig.DEV,
        layoutMode: PageLayoutMode.LIST,
    },
    DEV_DETAIL: {
        id: 5,
        title: 'Разработка',
        link: RouterConfig.DEV_DETAIL,
        layoutMode: PageLayoutMode.DETAIL,
    },
    PHOTO: {
        id: 6,
        title: 'Фотография',
        link: RouterConfig.PHOTO,
        layoutMode: PageLayoutMode.LIST,
    },
    PHOTO_DETAIL: {
        id: 7,
        title: 'Фотография',
        link: RouterConfig.PHOTO_DETAIL,
        layoutMode: PageLayoutMode.DETAIL,
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
