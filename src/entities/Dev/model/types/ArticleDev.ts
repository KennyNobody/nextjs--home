import { ArticleCategoryType } from 'entities/Category';
import { DetailContentType } from 'entities/DetailContent';
import {MetaPageType} from "../../../../shared/types/CommonTypes";

interface ArticleDevType {
    id: number;
    slug: string;
    title: string;
    locale: string;
    documentId: string;
    createdAt: Date;
    updatedAt: Date;
    seo?: MetaPageType;
    publishedAt?: Date;
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
