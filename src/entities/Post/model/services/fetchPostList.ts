import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { ThunkConfig } from 'shared/state/StateSchema';
import { ResponseType } from 'shared/types/ResponseType';
import { ApiRequestParams } from 'shared/types/ApiRequestParams';
import { ArticlePostType } from '../types/ArticlePost';
import { fetchPostClient } from '../../api/fetchPostClient';
import { getPostPagination } from '../selectors/postSelector';

interface FetchPostListProps {
    replace?: boolean;
    mode: 'start' | 'next';
}

export const fetchPostList = createAsyncThunk<ResponseType<ArticlePostType[]>, FetchPostListProps, ThunkConfig<string>>(
    'post/fetchPostList',
    async (props, thunkAPI) => {
        // const { page } = props;
        const {
            getState,
            rejectWithValue,
        } = thunkAPI;

        const pagination = getPostPagination(getState());
        const page = (pagination?.page ?? 1) + 1;

        try {
            const params: ApiRequestParams = {
                pagination: {
                    page,
                    pageSize: 8,
                },
                populate: 'main.preview,category',
                sort: 'publishedAt:DESC',
            }

            return await fetchPostClient(ApiRoutes.POSTS_LIST, params);
        } catch (e) {
            return rejectWithValue('error');
        }
    }
);
