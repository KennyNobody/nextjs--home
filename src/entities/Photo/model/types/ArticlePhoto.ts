import { MetaPageType } from 'shared/types/CommonTypes';
import { ArticleCategoryType } from 'entities/Category';
import { DetailContentType } from 'entities/DetailContent';

interface ArticlePhotoType {
    id: number;
    slug: string;
    title: string;
    locale: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    publishedAt?: Date | string;
    main?: DetailContentType;
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
