import { MediaFileType } from 'entities/Media';
import { SectionType } from 'entities/Section';

enum LangShownType {
    RU = 'Ру',
    EN = 'En',
}

enum LangEngineType {
    RU = 'ru',
    EN = 'en',
}

enum ContentKeyType {
    DEV = 'dev',
    PHOTO = 'photo',
    POST = 'post',
}

// interface BaseResponseType {
//     data: any;
//     meta: any;
// }

enum SocialNetwork {
    FACEBOOK = 'Facebook',
    TWITTER = 'Twitter',
}

interface MetaSocial {
    socialNetwork: SocialNetwork;
    title: string;
    description: string;
    image?: { data: MediaFileType };
}

interface MetaPageType {
    metaTitle: string;
    metaDescription: string;
    metaImage?: { data: MediaFileType };
    metaSocial: MetaSocial[];
    keywords?: string;
    metaRobots?: string;
    structuredData?: any;
    metaViewport?: string;
    canonicalURL?: string;
}

export {
    LangShownType,
    LangEngineType,
    ContentKeyType,
    SocialNetwork,
    type MetaSocial,
    type MetaPageType,
    // type BaseResponseType,
    // type PageIndexResponseType,
};
