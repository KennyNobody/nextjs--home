import { errorLogger } from 'shared/lib/errorLogger';
import { ApiError, StrapiErrorResponse } from 'shared/types/ErrorTypes';

const extractStrapiError = (error: any): StrapiErrorResponse | undefined => {
    if (error.response?.data?.error) {
        return error.response.data.error;
    }
    return undefined;
};

const extractValidationErrors = (strapiError?: StrapiErrorResponse) => {
    if (strapiError?.name === 'ValidationError') {
        return strapiError.details.errors;
    }
    return undefined;
};

export const handleApiError = (
    error: any,
    endpoint: string,
    method: string = 'GET'
): ApiError => {
    const strapiError = extractStrapiError(error);
    const validationErrors = extractValidationErrors(strapiError);

    const apiError: ApiError = {
        message: strapiError?.message || error.response?.data?.message || error.message || 'Unknown error',
        status: strapiError?.status || error.response?.status || 500,
        timestamp: new Date().toISOString(),
        endpoint,
        method,
        // TODO: Нормально разобраться с ошибками
        // strapiError,
        // validationErrors,
    };

    // Логируем только НЕ-400 ошибки (5xx, 404 и др.)
    if (apiError.status !== 400) {
        errorLogger.log(apiError, {
            userAgent: typeof window !== 'undefined' ? navigator.userAgent : undefined,
            url: typeof window !== 'undefined' ? window.location.href : undefined,
        });
    } else {
        // Для 400 ошибок просто выводим в консоль в development
        if (process.env.NODE_ENV === 'development') {
            console.warn('Client error:', apiError);
        }
    }

    return apiError;
};
