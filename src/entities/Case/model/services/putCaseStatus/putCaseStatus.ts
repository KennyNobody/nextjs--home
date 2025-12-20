import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoutes } from 'shared/api/apiEndpoints';
import { ThunkConfig } from 'shared/state/StateSchema';
import { StrapiApiError } from 'shared/types/ErrorTypes';
import { ArticleCaseType } from '../../types/ArticleCase';
import { ResponseType } from 'shared/types/ResponseType';

interface PutCaseStatusProps {
    postID: string;
    mode: 'publish' | 'reject';
}

export const putCaseStatus = createAsyncThunk<
    ResponseType<ArticleCaseType>,
    PutCaseStatusProps,
    ThunkConfig<StrapiApiError>
>(
    'case/putCaseStatus',
    async (props, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        const { postID, mode } = props;

        try {
            const response = await extra.api.put<ResponseType<ArticleCaseType>>(
                `${ApiRoutes.CASE_LIST}/${postID}`,
                {
                    data: {
                        statusPublish: mode === 'publish' ? 'опубликован' : 'отклонен',
                    }
                },
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );

            console.log(response);

            return response.data;
        } catch (e) {
            return rejectWithValue(e as StrapiApiError);
        }
    },
);
