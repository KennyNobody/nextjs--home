import { MediaFileType } from 'entities/Media';

enum LangShownType {
    RU = 'Ру',
    EN = 'En',
}

enum LangEngineType {
    RU = 'ru',
    EN = 'en',
}

interface MetaSocial {
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
    type MetaSocial,
    type MetaPageType,
};
