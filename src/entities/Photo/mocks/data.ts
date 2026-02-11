import { ArticlePhotoType } from '../model/types/ArticlePhoto';

const data: ArticlePhotoType = {
    id: 1,
    title: 'Заголовок',
    slug: 'Подпись',
    createdAt: '2024-02-28T15:05:45.021Z',
    updatedAt: '2026-01-29T14:42:35.298Z',
    publishedAt: '2024-02-28T15:05:46.108Z',
    locale: 'ru',
    main: {
        id: 3,
        showPreview: true,
        previewTitle: 'Заголовок',
        previewCaption: 'Подпись',
        previewInverted: true,
        content: [
            {
                type: 'paragraph',
                children: [
                    {
                        type: 'text',
                        text: 'Абзац с текстом',
                    }
                ]
            },
        ],
        // preview: {
        //     data: {
        //         id: 84,
        //         name: '14_julia.jpg',
        //         alternativeText: 'Подпись',
        //         caption: '«Заголовок» ',
        //         width: 1920,
        //         height: 1280,
        //         formats: {
        //             thumbnail: {
        //                 name: 'thumbnail_14_julia.jpg',
        //                 hash: 'thumbnail_14_julia_f8b30ffd20',
        //                 ext: '.jpg',
        //                 mime: 'image/jpeg',
        //                 path: null,
        //                 width: 234,
        //                 height: 156,
        //                 size: 3.53,
        //                 url: 'https://placehold.co/234x156'
        //             },
        //             medium: {
        //                 name: 'medium_14_julia.jpg',
        //                 hash: 'medium_14_julia_f8b30ffd20',
        //                 ext: '.jpg',
        //                 mime: 'image/jpeg',
        //                 path: null,
        //                 width: 1200,
        //                 height: 800,
        //                 size: 42.15,
        //                 url: 'https://placehold.co/1200x800'
        //             },
        //             small: {
        //                 name: 'small_14_julia.jpg',
        //                 hash: 'small_14_julia_f8b30ffd20',
        //                 ext: '.jpg',
        //                 mime: 'image/jpeg',
        //                 path: null,
        //                 width: 560,
        //                 height: 373,
        //                 size: 12.69,
        //                 url: 'https://placehold.co/560x373'
        //             }
        //         },
        //         hash: '14_julia_f8b30ffd20',
        //         ext: '.jpg',
        //         mime: 'image/jpeg',
        //         size: 105.65,
        //         url: 'https://placehold.co/1920x1280',
        //         previewUrl: null,
        //         provider: 'local',
        //         provider_metadata: null,
        //         createdAt: '2024-02-03T04:14:05.126Z',
        //         updatedAt: '2024-03-21T06:46:17.488Z'
        //     }
        // }
    },
    seo: {
        metaTitle: 'Meta title',
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
};
