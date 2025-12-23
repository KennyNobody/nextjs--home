interface ApiError {
    message: string;
    status: number;
    timestamp: Date | string;
    endpoint: string;
    method: string;
}

interface ErrorLogEntry {
    id: string;
    error: ApiError;
    userId?: string;
    userAgent?: string;
    url?: string;
}

// Типы для Strapi 5 ответов
interface StrapiMeta {
    pagination?: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    };
}

interface StrapiSuccessResponse<T = unknown> {
    data: T;
    meta?: StrapiMeta;
}

interface StrapiError {
    status: number;
    message: string;
}

interface StrapiErrorDetails {
    path: string[];
    message: string;
    name: string;
}

interface StrapiValidationError extends StrapiError{
    name: 'ValidationError';
    details: {
        errors: StrapiErrorDetails[];
    };
}

interface StrapiApplicationError extends StrapiError {
    name: 'ApplicationError';
    details?: Record<string, unknown>;
}

interface StrapiForbiddenError extends StrapiError{
    name: 'ForbiddenError';
    details?: Record<string, unknown>;
}

interface StrapiNotFoundError extends StrapiError {
    name: 'NotFoundError';
    details?: Record<string, unknown>;
}

interface StrapiUnauthorizedError extends StrapiError {
    name: 'UnauthorizedError';
    details?: Record<string, unknown>;
}

interface StrapiInternalError extends StrapiError{
    name: 'InternalError';
    details?: Record<string, unknown>;
}

type StrapiErrorResponse =
    | StrapiValidationError
    | StrapiApplicationError
    | StrapiForbiddenError
    | StrapiNotFoundError
    | StrapiUnauthorizedError
    | StrapiInternalError;

// interface StrapiApiError extends ApiError {
//     strapiError?: StrapiErrorResponse;
//     validationErrors?: StrapiErrorDetails[];
// }

export type {
    ApiError,
    StrapiMeta,
    ErrorLogEntry,
    // StrapiApiError,
    StrapiError,
    StrapiErrorDetails,
    StrapiInternalError,
    StrapiNotFoundError,
    StrapiErrorResponse,
    StrapiForbiddenError,
    StrapiSuccessResponse,
    StrapiValidationError,
    StrapiApplicationError,
    StrapiUnauthorizedError,
}
