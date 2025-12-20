import { EntityState } from '@reduxjs/toolkit';
import { ArticleCaseType } from 'entities/Case';
import { PaginationType } from 'entities/Pagination';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

interface CaseListSchema extends EntityState<ArticleCaseType, ArticleCaseType['documentId']> {
    isLoading?: boolean;
    errors?: FetchBaseQueryError;
    pagination?: PaginationType;
}

export type {
    CaseListSchema,
}
