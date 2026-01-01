import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { ThunkConfig } from 'shared/state/StateSchema';
import { ResponseType } from 'shared/types/ResponseType';
import { ApiRequestParams } from 'shared/types/ApiRequestParams';
import { ArticleCategoryType } from '../types/ArticleCategory';
import { fetchCategoryClient } from '../../api/fetchCategoryClient';

interface FetchPostListProps {
    replace?: boolean;
}

export const fetchCategoryList = createAsyncThunk<ResponseType<ArticleCategoryType[]>, FetchPostListProps, ThunkConfig<string>>(
    'category/fetchCategoryList',
    async (props, thunkAPI) => {
        // const { page } = props;
        const {
            rejectWithValue,
        } = thunkAPI;

        try {
            const params: ApiRequestParams = {
                pagination: {
                    page: 1,
                    pageSize: 100,
                },
                // populate: 'main.preview,category',
                sort: 'publishedAt:DESC',
            }

            return await fetchCategoryClient(ApiRoutes.POST_CAT_LIST, params);
        } catch (e) {
            return rejectWithValue('error');
        }
    }
);
