import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { ThunkConfig } from 'shared/state/StateSchema';
import { ResponseType } from 'shared/types/ResponseType';
import { PageType } from '../types/Page';
import { fetchPageClient } from '../../api/fetchPageClient';

export const fetchPage = createAsyncThunk<ResponseType<PageType>, ApiRoutes, ThunkConfig<string>>(
    'page/fetchPage',
    async (route, { rejectWithValue }) => {
        try {
            return await fetchPageClient(route);
        } catch (e) {
            return rejectWithValue('error');
        }
    }
);
