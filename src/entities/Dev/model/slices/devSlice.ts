import {
    createSlice,
    PayloadAction,
    createEntityAdapter,
} from '@reduxjs/toolkit';
import { ArticleDevType } from '../types/ArticleDev';
import { DevSchema } from '../types/DevSchema';
import { fetchDevList } from '../services/fetchDevList';
import { StateSchema } from 'shared/state/StateSchema';
import { ResponseType } from 'shared/types/ResponseType';
import {DataLabels} from "../../../../shared/labels/data";

const devListAdapter = createEntityAdapter<ArticleDevType, number>({
    selectId: (item: ArticleDevType) => item.id,
});

export const getDevList = devListAdapter.getSelectors<StateSchema>(
    (state) => state.dev || devListAdapter.getInitialState(),
);

const initialState: DevSchema = {
    isLoading: false,
    errors: undefined,
    tag: undefined,
    ids: [],
    entities: {},
    isInit: false,
    pagination: undefined,
};

const devSlice = createSlice({
    name: 'devSlice',
    initialState,
    reducers: {
        setResponseData: (state, action: PayloadAction<ResponseType<ArticleDevType[]>>) => {
            const { data, meta } = action.payload;

            if (data && meta?.pagination) {
                state.pagination = meta.pagination;
                devListAdapter.setAll(state, data);
                state.isInit = true;
            }
        },
        clearListData: (state) => {
            devListAdapter.removeAll(state);
            state.pagination = undefined;
            state.isInit = false;
        },
        toggleTag: (state, action: PayloadAction<number | undefined>) => {
            if (state.tag === action.payload) {
                state.tag = undefined;
            } else {
                state.tag = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        const request = fetchDevList;

        builder
            .addCase(request.pending, (state, action) => {
                const { replace } = action.meta.arg;
                if (replace) {
                    devListAdapter.removeAll(state);
                    state.pagination = undefined;
                }

                state.currentRequestId = action.meta.requestId;

                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(request.fulfilled, (state, action) => {
                // Предотвращаем race condition
                if (state.currentRequestId !== action.meta.requestId) return;

                const { data, meta } = action.payload;
                const addData =
                    action?.meta?.arg?.replace
                        ? devListAdapter.setAll
                        : devListAdapter.addMany;
                addData(state, data);

                if (meta?.pagination) state.pagination = meta.pagination;
                state.isLoading = false;
                state.currentRequestId = undefined;
            })
            .addCase(request.rejected, (state, action) => {
                if (state.currentRequestId !== action.meta.requestId) return;

                state.isLoading = false;
                state.currentRequestId = undefined;
                state.errors = action?.payload ?? DataLabels.UNKNOWS_ERROR;
            });
    },
});

export const {
    reducer: devReducer,
    actions: devActions,
} = devSlice;
