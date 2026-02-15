import qs from 'qs';
import { ApiRequestParams } from '../types/ApiRequestParams';

export const buildApiParams = (params: ApiRequestParams): string => {
    return qs.stringify(params, { encodeValuesOnly: true });
};
