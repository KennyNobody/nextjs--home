
interface RouterItem {
    id: number;
    title: string;
    link: RouterEndpoints;
}

type RouterLinksType = {
    [key in keyof typeof RouterEndpoints]: RouterItem;
}

enum RouterEndpoints {
    MAIN = '/',
    CASES_LIST = '/cases',
}

const RouterLinks: RouterLinksType = {
    MAIN: {
        id: 1,
        title: 'Главная',
        link: RouterEndpoints.MAIN,
    },
    CASES_LIST: {
        id: 14,
        title: 'Кейсы',
        link: RouterEndpoints.CASES_LIST,
    }
}

export {
    type RouterItem,
    RouterLinks,
    RouterEndpoints,
}
