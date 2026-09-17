import { EntityState } from '@reduxjs/toolkit';
import { ArticlePhotoType } from './ArticlePhoto';
import { PaginationType } from 'entities/Pagination';

export interface PhotoSchema extends EntityState<ArticlePhotoType, number> {
    isLoading?: boolean;
    errors?: string;
    pagination?: PaginationType;
    currentRequestId?: string;
    isPreviewData?: boolean;
}
