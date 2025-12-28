import qs from 'qs';

export const paramsSerializer = (params: Record<string, unknown>) =>
    qs.stringify(params, {
        encode: false,
        arrayFormat: 'indices', // Формат filters[id][$in][0]=6 вместо filters[id][$in][]=6
        encodeValuesOnly: true,
        skipNulls: true,
    });
