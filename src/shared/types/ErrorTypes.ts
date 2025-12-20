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

interface StrapiErrorDetails {
    path: string[];
    message: string;
    name: string;
}

interface StrapiValidationError {
    status: 400;
    name: 'ValidationError';
    message: string;
    details: {
        errors: StrapiErrorDetails[];
    };
}

interface StrapiApplicationError {
    status: 400;
    name: 'ApplicationError';
    message: string;
    details?: Record<string, unknown>;
}

interface StrapiForbiddenError {
    status: 403;
    name: 'ForbiddenError';
    message: string;
    details?: Record<string, unknown>;
}

interface StrapiNotFoundError {
    status: 404;
    name: 'NotFoundError';
    message: string;
    details?: Record<string, unknown>;
}

interface StrapiUnauthorizedError {
    status: 401;
    name: 'UnauthorizedError';
    message: string;
    details?: Record<string, unknown>;
}

interface StrapiInternalError {
    status: 500;
    name: 'InternalError';
    message: string;
    details?: Record<string, unknown>;
}

type StrapiErrorResponse =
    | StrapiValidationError
    | StrapiApplicationError
    | StrapiForbiddenError
    | StrapiNotFoundError
    | StrapiUnauthorizedError
    | StrapiInternalError;

interface StrapiApiError extends ApiError {
    strapiError?: StrapiErrorResponse;
    validationErrors?: StrapiErrorDetails[];
}

export type {
    ApiError,
    StrapiMeta,
    ErrorLogEntry,
    StrapiApiError,
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
