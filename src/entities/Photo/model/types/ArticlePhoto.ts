import { MetaPageType } from 'shared/types/CommonTypes';
import { ArticleCategoryType } from 'entities/Category';
import { DetailContentType } from 'entities/DetailContent';

interface ArticlePhotoType {
    id: number;
    slug: string;
    title: string;
    locale: string;
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
    ArticlePhotoType,
};
