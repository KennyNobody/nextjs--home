import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { ThunkConfig } from 'shared/state/StateSchema';
import { ResponseType } from 'shared/types/ResponseType';
import { ApiRequestParams } from 'shared/types/ApiRequestParams';

import { ArticlePhotoType } from '../types/ArticlePhoto';
import { fetchPhotoClient } from '../../api/fetchPhotoClient';
import { getPhotoPagination } from '../selectors/photoSelector';

interface FetchPhotoListProps {
    replace?: boolean;
    mode: 'start' | 'next';
}

export const fetchPhotoList = createAsyncThunk<
    ResponseType<ArticlePhotoType[]>,
    FetchPhotoListProps,
    ThunkConfig<string>
>(
    'photo/fetchPhotoList',
    async (props, thunkAPI) => {
        const { mode } = props;
        const {
            getState,
            rejectWithValue,
        } = thunkAPI;

        const pagination = getPhotoPagination(getState());
        const page = (pagination?.page ?? 1) + 1;

        try {
            const params: ApiRequestParams = {
                populate: 'main.preview,category',
                sort: 'publishedAt:DESC',
            }

            params.pagination = {
                page: mode === 'start' ? 1 : page,
                pageSize: 8,
            };

            return await fetchPhotoClient(ApiRoutes.PHOTO_LIST, params);
        } catch (e) {
            return rejectWithValue('error');
        }
    }
);
