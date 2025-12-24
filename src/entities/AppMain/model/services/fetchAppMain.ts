import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAppMainClient } from '../../api/fetchAppMainClient';

export const fetchAppMain = createAsyncThunk(
    'appMain/fetchAppMain',
    async (_, { rejectWithValue }) => {
        try {
            return await fetchAppMainClient();
        } catch (e) {
            return rejectWithValue('error');
        }
    }
);
