import { MetaPageType } from 'shared/types/CommonTypes';
import { ArticleCategoryType } from 'entities/Category';
import { DetailContentType } from 'entities/DetailContent';

interface ArticlePostType {
    id: number;
    slug: string;
    title: string;
    locale: string;
    documentId: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    main?: DetailContentType;
    // TODO: Точно всегда есть?
    seo: MetaPageType;
    tags?: {
        data: ArticleCategoryType[];
    };
    category?: {
        data: ArticleCategoryType;
    };
}

export type {
    ArticlePostType,
};
