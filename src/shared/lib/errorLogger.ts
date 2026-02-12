import * as Sentry from '@sentry/nextjs'
import { ApiError, ErrorLogEntry } from 'shared/types/ErrorTypes';

let errors: ErrorLogEntry[] = [];

const sendToExternalLogger = (logEntry: ErrorLogEntry): void => {
    Sentry.captureException(new Error(logEntry.error.message), {
        tags: {
            error_type: 'api_error',
            status_code: logEntry.error.status.toString(),
            endpoint: logEntry.error.endpoint,
            method: logEntry.error.method,
        },
        extra: {
            log_id: logEntry.id,
            timestamp: logEntry.error.timestamp,
            full_error: logEntry.error,
            context: logEntry,
        },
    });
};

const logError = (error: ApiError, context?: Partial<ErrorLogEntry>): void => {
    const logEntry: ErrorLogEntry = {
        id: crypto.randomUUID(),
        error,
        // timestamp: new Date(),
        ...context,
    };

    errors.push(logEntry);

    if (process.env.NODE_ENV === 'development') {
        console.error('API Error:', logEntry);
    }

    sendToExternalLogger(logEntry);
};

const getErrors = (): ErrorLogEntry[] => {
    return [...errors];
};

const clearErrors = (): void => {
    errors = [];
};

export const errorLogger = {
    log: logError,
    getErrors,
    clearErrors,
};
