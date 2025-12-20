import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { ThunkConfig } from 'shared/state/StateSchema';
import { CaseDetailResponseType } from '../../types/CaseDetail';
interface FetchCaseDetailProps {
    caseId: string;
}

export const fetchCaseDetail = createAsyncThunk<CaseDetailResponseType, FetchCaseDetailProps, ThunkConfig<string>>(
    'caseDetail/fetchCaseDetail',

    async (props, thunkApi) => {
        const {
            extra,
            rejectWithValue,
        } = thunkApi;

        const { caseId } = props;

        try {
            const params: Record<string, string | number | string[]> = {
                'populate': '*',
            };

            const response = await extra.api.get<CaseDetailResponseType>(
                `${ApiRoutes.CASE_LIST}/${caseId}`, { params },
            );

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
