import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { ThunkConfig } from 'shared/state/StateSchema';
import { ResponseType } from 'shared/types/ResponseType';
import { ApiRequestParams } from 'shared/types/ApiRequestParams';
import { ArticlePostType } from '../types/ArticlePost';
import { fetchPostClient } from '../../api/fetchPostClient';
import { getPostCategory, getPostPagination } from '../selectors/postSelector';

interface FetchPostListProps {
    replace?: boolean;
    mode: 'start' | 'next';
}

export const fetchPostList = createAsyncThunk<ResponseType<ArticlePostType[]>, FetchPostListProps, ThunkConfig<string>>(
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

            // TODO: Порефакторить запросы везде
            if (mode === 'start') {
                params.pagination = {
                    page: 1,
                    pageSize: 8,
                }
            } else if (mode === 'next') {
                params.pagination = {
                    page,
                    pageSize: 8,
                }
            }

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
            return rejectWithValue('error');
        }
    }
);
