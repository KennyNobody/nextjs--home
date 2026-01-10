

interface FilterParams {
    [key: string]: string | number | boolean | FilterParams;
}

interface ApiRequestParams {
    pagination?: {
        page?: number;
        pageSize?: number;
    };
    populate?: string | string[];
    sort?: string;
    filters?: FilterParams;
    // filters?: Record<string, any>;
    // sort?: string | string[];
}

export {
    type FilterParams,
    type ApiRequestParams,
}
