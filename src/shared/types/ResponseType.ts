import { PaginationType } from 'entities/Pagination';

interface ResponseType<T = unknown> {
    data: T;
    meta: {
        pagination?: PaginationType;
    }
}

export type {
    ResponseType,
}
