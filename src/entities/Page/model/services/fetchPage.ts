import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { ThunkConfig } from 'shared/state/StateSchema';
import { PageResponseType } from 'shared/types/CommonTypes';
import { fetchPageClient } from '../../api/fetchPageClient';

export const fetchPage = createAsyncThunk<PageResponseType, ApiRoutes, ThunkConfig<string>>(
    'page/fetchPage',
    async (route, { rejectWithValue }) => {
        try {
            return await fetchPageClient(route);
        } catch (e) {
            return rejectWithValue('error');
        }
    }
);
