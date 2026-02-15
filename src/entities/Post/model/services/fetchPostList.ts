import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { ThunkConfig } from 'shared/state/StateSchema';
import { ApiRequestParams } from 'shared/types/ApiRequestParams';

import { ResponseType } from 'shared/types/ResponseType';
import { fetchPostClient } from '../../api/fetchPostClient';
import { getPostCategory, getPostPagination } from '../selectors/postSelector';
import { ArticlePostType } from '../types/ArticlePost';

interface FetchPostListProps {
    replace?: boolean;
    mode: 'start' | 'next';
}

export const fetchPostList = createAsyncThunk<
    ResponseType<ArticlePostType[]>,
    FetchPostListProps,
    ThunkConfig<string>
>(
    'post/fetchPostList',
    async (props, thunkAPI) => {
        const { mode } = props;
        const {
            getState,
            rejectWithValue,
        } = thunkAPI;

        const pagination = getPostPagination(getState());
        const category = getPostCategory(getState());
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

            if (category) {
                params.filters = {
                    category: {
                        id: {
                            $eq: category,
                        },
                    },
                };
            }

            return await fetchPostClient(ApiRoutes.POSTS_LIST, params);
        } catch (e) {
            if (axios.isAxiosError(e)) {
                return rejectWithValue(e.response?.data?.message || e.message || 'Network error');
            }
            return rejectWithValue('Unknown error');
        }
    }
);
