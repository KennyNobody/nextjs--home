import { ArticleCategoryType } from 'entities/Category';
import { DetailContentType } from 'shared/types/DetailContent';

interface ArticleDevType {
    id: number;
    slug: string;
    title: string;
    locale: string;
    documentId: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    main: DetailContentType;
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
