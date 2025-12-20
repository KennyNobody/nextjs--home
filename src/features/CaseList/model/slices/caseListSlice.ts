import {
    createSlice,
    PayloadAction,
    createEntityAdapter,
} from '@reduxjs/toolkit';
import { ArticleCaseType, putCaseStatus } from 'entities/Case';
import { PaginationType } from 'entities/Pagination';
import { StateSchema } from 'shared/state/StateSchema';
import { CaseListResponseType } from '../types/CaseList';
import { CaseListSchema } from '../types/CaseListSchema';
import {
    fetchCaseList,
} from '../services/fetchCaseListData/fetchCaseListData';

const caseListAdapter = createEntityAdapter<ArticleCaseType, string>({
    selectId: (entity) => entity.documentId,
});

const initialState: CaseListSchema = caseListAdapter.getInitialState({
    isLoading: undefined,
    errors: undefined,
    pagination: {
        page: 1,
        pageSize: 2,
        total: 1,
        pageCount: 1,
    },
});

const getCaseListData = caseListAdapter.getSelectors<StateSchema>(
    (state: StateSchema) => state.caseList || caseListAdapter.getInitialState(),
);

const caseListSlice = createSlice({
    name: 'caseList',
    initialState,
    reducers: {
        setResponseData: (state, action: PayloadAction<CaseListResponseType>) => {
            caseListAdapter.setAll(state, action.payload.data);

            if (action?.payload?.meta?.pagination) {
                state.pagination = action.payload.meta.pagination;
            }
        },
        setPagination: (state, action: PayloadAction<PaginationType>) => {
            state.pagination = action.payload;
        },
        resetParams: (state) => {
            state.pagination = {
                page: 1,
                pageSize: 2,
                total: 1,
                pageCount: 1,
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCaseList.pending, (state: CaseListSchema, action) => {
                if (action?.meta?.arg?.replace) {
                    caseListAdapter.removeAll(state);
                }

                state.pagination = undefined;
                // state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCaseList.fulfilled, (state: CaseListSchema, action) => {
                const { data, meta } = action.payload;

                if (action?.meta?.arg?.replace) {
                    caseListAdapter.setAll(state, data);
                } else {
                    caseListAdapter.addMany(state, data);
                }

                if (meta?.pagination) {
                    state.pagination = meta.pagination;
                }

                state.isLoading = false;
            })
            .addCase(fetchCaseList.rejected, (state: CaseListSchema, action) => {
                state.isLoading = false;
                // TODO: Указать правильные типы
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                state.errors = action.payload;
            })

            // Отправка нового статуса
            .addCase(putCaseStatus.pending, (state: CaseListSchema) => {
                state.isLoading = true;
            })
            .addCase(putCaseStatus.fulfilled, (state: CaseListSchema, action) => {
                const { data } = action.payload;

                caseListAdapter.updateOne(state, {
                    id: data.documentId,
                    changes: {
                        statusPublish: data.statusPublish
                    }
                });

                state.isLoading = false;
            })
            .addCase(putCaseStatus.rejected, (state: CaseListSchema, action) => {
                state.isLoading = false;
                // TODO: Указать правильные типы
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                state.errors = action.payload;
            });
    },
});

export const {
    reducer: caseListReducer,
    actions: caseListActions,
} = caseListSlice;

export {
    getCaseListData,
    caseListAdapter,
};
