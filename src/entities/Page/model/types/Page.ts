import { MetaPageType } from 'shared/types/CommonTypes';
import { ResponseType } from 'shared/types/ResponseType';
import { SectionType } from 'entities/Section';

interface PageType {
    title: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    localizations: {
        data: [any],
    };
    seo: MetaPageType;
    section?: SectionType[];
}

type PageServerResponse<T = unknown> = ResponseType<PageType>

export type {
    PageType,
    PageServerResponse,
}
