import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { ThunkConfig } from 'shared/state/StateSchema';
import { AppMainResponseType } from '../types/AppMainResponse';

export const fetchAppMain = createAsyncThunk<AppMainResponseType, undefined, ThunkConfig<string>>(
    'appMain/fetchAppMain',

    async (props, thunkApi) => {
        const {
            extra,
            rejectWithValue,
        } = thunkApi;

        try {
            const params: Record<string, string | number | string[]> = {
                'populate': '*',
            };

            const response = await extra.api.get<AppMainResponseType>(
                ApiRoutes.MAIN,
                { params },
            );

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
