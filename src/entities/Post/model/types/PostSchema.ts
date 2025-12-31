import { EntityState } from '@reduxjs/toolkit';
import { ArticlePostType } from './ArticlePost';
import { PaginationType } from 'entities/Pagination';

export interface PostSchema extends EntityState<ArticlePostType, number> {
    isLoading?: boolean;
    // errors?: FetchBaseQueryError;
    errors?: string;
    category: number | undefined;
    pagination?: PaginationType;
    isInit: boolean;
}
