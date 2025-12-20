import { ResponseType } from 'shared/types/ResponseType';

interface Meta {
    metaTitle: string;
    metaDescription: string;

    shareImage: unknown;
    keywords: string;
    metaRobots: string;
    structuredData: string;
    metaViewport: string;
    canonicalURL: string;
}

interface PageType<T = unknown> {
    // seo: Meta;
    sections: T;
}

type PageServerResponse<T = unknown> = ResponseType<PageType<T>>

export type {
    Meta,
    PageType,
    PageServerResponse,
}
