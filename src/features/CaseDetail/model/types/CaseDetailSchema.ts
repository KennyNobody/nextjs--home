import { ArticleCaseType } from 'entities/Case';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

interface CaseDetailSchema {
    data?: ArticleCaseType;
    isLoading?: boolean;
    errors?: FetchBaseQueryError;
}

export type {
    CaseDetailSchema,
}
