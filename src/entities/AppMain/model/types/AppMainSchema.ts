import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { AppMainType } from './AppMain';

interface AppMainSchema {
    data?: AppMainType;
    isLoading?: boolean;
    errors?: string;
}

export type {
    AppMainSchema,
}
