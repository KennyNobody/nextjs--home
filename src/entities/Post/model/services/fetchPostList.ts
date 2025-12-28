import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { ThunkConfig } from 'shared/state/StateSchema';
import { ResponseType } from 'shared/types/ResponseType';
import { ApiRequestParams } from 'shared/types/ApiRequestParams';
import { ArticlePostType } from '../types/ArticlePost';
import { fetchPostClient } from '../../api/fetchPostClient';

interface FetchPostListProps {
    replace?: boolean;
    page?: number;
    mode: 'start' | 'next';
}

export const fetchPostList = createAsyncThunk<ResponseType<ArticlePostType[]>, FetchPostListProps, ThunkConfig<string>>(
    'post/fetchPostList',
    async (props, { rejectWithValue }) => {
        const { page } = props;

        try {
            const params: ApiRequestParams = {
                pagination: {
                    page: page || 1,
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
