import { MetaPageType } from 'shared/types/CommonTypes';
import { ArticleCategoryType } from 'entities/Category';
import { DetailContentType } from 'entities/DetailContent';

interface ArticleDevType {
    id: number;
    slug: string;
    title: string;
    locale: string;
    // documentId: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    seo: MetaPageType;
    publishedAt?: Date | string;
    main?: DetailContentType;
    tags?: {
        data: ArticleCategoryType[];
    };
    category?: {
        data: ArticleCategoryType;
    };
}

export type {
    ArticleDevType,
};
