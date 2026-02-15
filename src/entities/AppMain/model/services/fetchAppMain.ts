import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'shared/state/StateSchema';
import { fetchAppMainClient } from '../../api/fetchAppMainClient';
import { AppMainResponseType } from '../types/AppMainResponse';

export const fetchAppMain = createAsyncThunk<
    AppMainResponseType,
    void,
    ThunkConfig<string>
>(
    'appMain/fetchAppMain',
    async (_, { rejectWithValue }) => {
        try {
            return await fetchAppMainClient();
        } catch (e) {
            if (axios.isAxiosError(e)) {
                return rejectWithValue(e.response?.data?.message || e.message || 'Network error');
            }
            return rejectWithValue('Unknown error');
        }
    }
);
