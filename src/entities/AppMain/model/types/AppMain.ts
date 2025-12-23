import { MediaFileType } from 'entities/Media';

interface AppMainType {
    name: string | null;
    description: string | null;
    years: string | null;
    author: string | null;
    nickname: string | null;
    createdAt: string | null;
    updatedAt: string | null;
    publishedAt: string | null;
    locale: string | null;
    preview?: {
        data: MediaFileType;
    },
    localizations: {
        data: any[];
    }
}

export {
    type AppMainType,
}
