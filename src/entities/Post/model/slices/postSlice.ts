import {
    createSlice,
    PayloadAction,
    createEntityAdapter,
} from '@reduxjs/toolkit';
import { DataLabels } from 'shared/labels/data';
import { StateSchema } from 'shared/state/StateSchema';
import { ResponseType } from 'shared/types/ResponseType';
import { PostSchema } from '../types/PostSchema';
import { ArticlePostType } from '../types/ArticlePost';
import { fetchPostList } from '../services/fetchPostList';

const postListAdapter = createEntityAdapter<ArticlePostType, number>({
    selectId: (item: ArticlePostType) => item.id,
});

export const getPostList = postListAdapter.getSelectors<StateSchema>(
    (state) => state.post || postListAdapter.getInitialState(),
);

const initialState: PostSchema = {
    isLoading: false,
    errors: undefined,
    category: undefined,
    ids: [],
    entities: {},
    isInit: false,
    pagination: undefined,
    currentRequestId: undefined,
};

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        setResponseData: (state, action: PayloadAction<ResponseType<ArticlePostType[]>>) => {
            const { data, meta } = action.payload;

            if (data && meta?.pagination) {
                state.pagination = meta.pagination;
                postListAdapter.setAll(state, data);
                state.isInit = true;
            }
        },
        clearListData: (state) => {
            postListAdapter.removeAll(state);
            state.pagination = undefined;
            state.isInit = false;
        },
        toggleCategory: (state, action: PayloadAction<number | undefined>) => {
            if (state.category === action.payload) {
                state.category = undefined;
            } else {
                state.category = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        const request = fetchPostList;

        builder
            .addCase(request.pending, (state, action) => {
                const { replace } = action.meta.arg;
                if (replace) {
                    postListAdapter.removeAll(state);
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
                        ? postListAdapter.setAll
                        : postListAdapter.addMany;
                addData(state, data);

                if (meta?.pagination) state.pagination = meta.pagination;

                state.isLoading = false;
                state.currentRequestId = undefined;
            })
            .addCase(request.rejected, (state, action) => {
                if (state.currentRequestId !== action.meta.requestId) return;

                state.isLoading = false;
                state.currentRequestId = undefined;
                state.errors = action.payload ?? DataLabels.UNKNOWS_ERROR;
            });
    },
});

export const {
    reducer: postReducer,
    actions: postActions,
} = postSlice;
