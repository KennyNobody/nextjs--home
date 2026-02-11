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
    id: number;
    metaTitle: string | null;
    metaDescription: string | null;
    metaImage?: { data: MediaFileType };
    metaSocial?: MetaSocial[];
    keywords?: string | null;
    metaRobots?: string | null;
    structuredData?: any;
    metaViewport?: string | null;
    canonicalURL?: string | null;
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
