import { EntityState } from '@reduxjs/toolkit';
import { ArticleDevType } from './ArticleDev';
import { PaginationType } from 'entities/Pagination';

export interface DevSchema extends EntityState<ArticleDevType, number> {
    isLoading?: boolean;
    errors?: string;
    tag: number | undefined;
    pagination?: PaginationType;
    currentRequestId?: string;
    isPreviewData?: boolean;
}
