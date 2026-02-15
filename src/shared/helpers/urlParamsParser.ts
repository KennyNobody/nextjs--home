import qs from 'qs';

type PaginationParams = {
    page?: number;
    pageSize?: number;
};

type FiltersParams = {
    tax?: {
        slug?: {
            $eq?: string;
            $in: string;
        };
    };
    theme?: {
        slug?: {
            $eq?: string;
            $in: string;
        }
    }
};

type UrlParams = {
    pagination?: PaginationParams;
    filters?: FiltersParams;
};

const parseUrlParams = (queryString: string | null): UrlParams => {
    if (!queryString) return {};

    return qs.parse(queryString, { ignoreQueryPrefix: true });
};

/**
 * Нормализует пагинацию из URL параметров
 */
const normalizePagination = (params: UrlParams) => ({
    page: params.pagination?.page ? Number(params.pagination.page) : 1,
    pageSize: params.pagination?.pageSize ? Number(params.pagination.pageSize) : 2,
    pageCount: 1,
    total: 1,
});

/**
 * Нормализует фильтры из URL параметров
 * Возвращает Record<string, string[]> где ключ - название фильтра
 */
const normalizeFilters = (params: UrlParams): Record<string, string[]> => {
    const result: Record<string, string[]> = {};

    if (!params.filters) return result;

    for (const [filterName, filterCondition] of Object.entries(params.filters)) {
        if (filterCondition?.slug) {
            if (filterCondition.slug.$eq) {
                result[filterName] = [filterCondition.slug.$eq];
            }
            else if (filterCondition.slug.$in) {
                result[filterName] = Array.isArray(filterCondition.slug.$in)
                    ? filterCondition.slug.$in
                    : [filterCondition.slug.$in];
            }
        }
    }

    return result;
};

export {
    parseUrlParams,
    normalizePagination,
    normalizeFilters,
}
