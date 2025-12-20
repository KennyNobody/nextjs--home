import { ApiError, ErrorLogEntry } from 'shared/types/ErrorTypes';

let errors: ErrorLogEntry[] = [];

const sendToExternalLogger = ( logEntry: ErrorLogEntry): void => {
    // Здесь можно интегрировать Sentry, LogRocket и т.д.
    console.log('Шлем в сервис логгирования');
    console.error(logEntry);
    // if (process.env.NODE_ENV === 'production') {
    //     // Пример отправки в внешний сервис
    //     fetch('/api/log-error', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(logEntry),
    //     }).catch(() => {
    //         // Игнорируем ошибки логирования
    //     });
    // }
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
