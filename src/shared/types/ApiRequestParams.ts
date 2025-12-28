interface ApiRequestParams {
    pagination?: {
        page?: number;
        pageSize?: number;
    };
    populate?: string | string[];
    sort?: string;
    // filters?: Record<string, any>;
    // sort?: string | string[];
}

export {
    type ApiRequestParams,
}
