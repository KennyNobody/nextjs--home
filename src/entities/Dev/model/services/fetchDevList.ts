import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { ThunkConfig } from 'shared/state/StateSchema';
import { ApiRequestParams } from 'shared/types/ApiRequestParams';
import { ResponseType } from 'shared/types/ResponseType';

import { fetchDevClient } from '../../api/fetchDevClient';
import { getDevTag, getDevPagination } from '../selectors/devSelector';
import { ArticleDevType } from '../types/ArticleDev';

interface FetchPostListProps {
    replace?: boolean;
    mode: 'start' | 'next';
}

export const fetchDevList = createAsyncThunk<ResponseType<ArticleDevType[]>, FetchPostListProps, ThunkConfig<string>>(
    'dev/fetchDevList',
    async (props, thunkAPI) => {
        const { mode } = props;
        const {
            getState,
            rejectWithValue,
        } = thunkAPI;

        const pagination = getDevPagination(getState());
        const tag = getDevTag(getState());
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

            if (tag) {
                params.filters = {
                    tags: {
                        id: {
                            $eq: tag,
                        },
                    },
                };
            }

            return await fetchDevClient(ApiRoutes.DEVS_LIST, params);
        } catch (e) {
            return rejectWithValue('error');
        }
    }
);
