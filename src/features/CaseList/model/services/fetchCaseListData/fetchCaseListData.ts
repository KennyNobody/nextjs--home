import qs from 'qs';
import { AxiosRequestConfig } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { ThunkConfig } from 'shared/state/StateSchema';
import { CaseListResponseType } from '../../types/CaseList';
import { getCaseListPagination } from '../../selectors/caseList';
interface FetchCaseListDataProps {
    page: number;
    replace?: boolean;
}

export const fetchCaseList = createAsyncThunk<CaseListResponseType, FetchCaseListDataProps, ThunkConfig<string>>(
    'caseList/fetchCaseList',

    async (props, thunkApi) => {
        const {
            extra,
            getState,
            rejectWithValue,
        } = thunkApi;

        const {
            page,
        } = props;
        const pagination = getCaseListPagination(getState());

        try {
            const queryParams: AxiosRequestConfig['params'] = {
                populate: '*',
                pagination: {
                    page: page || 1,
                    pageSize: pagination?.pageSize || 2,
                },
                sort: ['createdAt:desc'],
            };

            const response = await extra.api.get<CaseListResponseType>(
                ApiRoutes.CASE_LIST,
                {
                    params: queryParams,
                    paramsSerializer: (params) => qs.stringify(params, { encodeValuesOnly: true })
                },
            );

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
