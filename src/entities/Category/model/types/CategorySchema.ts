import { EntityState } from '@reduxjs/toolkit';
import { PaginationType } from 'entities/Pagination';
import { ArticleCategoryType } from './ArticleCategory';

export interface CategorySchema extends EntityState<ArticleCategoryType, number> {
    isLoading?: boolean;
    // errors?: FetchBaseQueryError;
    errors?: string;
    isInit: boolean;
}
