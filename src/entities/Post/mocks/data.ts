import { ArticlePostType } from '../model/types/ArticlePost';

const data: ArticlePostType = {
    id: 76,
    title: '«Чужой 3» Дэвид Финчер (1992)',
    createdAt: '2025-12-07T08:46:17.675Z',
    updatedAt: '2025-12-07T08:55:22.661Z',
    publishedAt: '2025-12-07T08:54:32.891Z',
    locale: 'ru',
    slug: 'chuzhoj-3-devid-fincher-1992',
    documentId: '123',
    category: {
        data: {
            id: 2,
            slug: 'cinema',
            title: 'Кино',
            createdAt: '2024-02-01T07:55:09.897Z',
            updatedAt: '2024-02-01T07:55:10.521Z',
            publishedAt: '2024-02-01T07:55:10.516Z',
            locale: 'ru'
        }
    },
    main: {
        id: 48,
        showPreview: true,
        previewTitle: '«Чужой 3»',
        previewCaption: ' Дэвид Финчер',
        previewInverted: true,
        content: [
            {
                type: 'paragraph',
                children: [
                    {
                        type: 'text',
                        text: '«Чужой 3», 1992'
                    }
                ]
            },
            {
                type: 'paragraph',
                children: [
                    {
                        type: 'text',
                        text: 'Режиссер: Дэвид Финчер'
                    }
                ]
            },
            {
                type: 'paragraph',
                children: [
                    {
                        type: 'text',
                        text: 'Оператор: Алекс Томсон'
                    }
                ]
            },
        ]
    },
    tags: {
        data: [
            {
                id: 71,
                title: 'цвет',
                slug: 'color',
                createdAt: '2024-03-21T16:19:16.054Z',
                updatedAt: '2024-03-21T16:19:17.165Z',
                publishedAt: '2024-03-21T16:19:17.161Z',
                locale: 'ru'
            }
        ]
    },
    seo: {
        id: 51,
        metaTitle: '«Чужой 3»  Дэвид Финчер – Кино',
        metaDescription: null,
        keywords: null,
        metaRobots: null,
        structuredData: null,
        metaViewport: null,
        canonicalURL: null
    },
}

export {
    data,
}
