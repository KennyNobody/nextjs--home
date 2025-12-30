import {
    createSlice,
    PayloadAction,
    createEntityAdapter,
} from '@reduxjs/toolkit';
import { ArticlePostType } from '../types/ArticlePost';
import { PostSchema } from '../types/PostSchema';
import { fetchPostList } from '../services/fetchPostList';
import { StateSchema } from 'shared/state/StateSchema';
import { ResponseType } from 'shared/types/ResponseType';

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
    testData1: undefined,
    testData2: undefined,
    pagination: {
        page: 1,
        pageCount: 1,
        pageSize: 8,
        total: 1,
    },
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
            }
        },
        // setPagination: (state, action: PayloadAction<PaginationType>) => {
        //     state.pagination = action.payload;
        // },
        // addData: (state, action: PayloadAction<ArticlePostType[]>) => {
        //     postListAdapter.addMany(state, action.payload);
        // },
        // replaceData: (state, action: PayloadAction<ArticlePostType[]>) => {
        //     postListAdapter.setAll(state, action.payload);
        // },
        // toggleCategory: (state, action: PayloadAction<number | undefined>) => {
        //     if (state.category === action.payload) {
        //         state.category = undefined;
        //     } else {
        //         state.category = action.payload;
        //     }
        // },
    },
    extraReducers: (builder) => {
        const request = fetchPostList;

        builder
            .addCase(request.pending, (state, action) => {
                const { replace } = action.meta.arg;
                if (replace) postListAdapter.removeAll(state);

                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(request.fulfilled, (state, action) => {
                state.isLoading = false;
                const { data, meta } = action.payload;
                const addData =
                    action?.meta?.arg?.replace
                        ? postListAdapter.setAll
                        : postListAdapter.addMany;

                addData(state, data);

                if (meta?.pagination) state.pagination = meta.pagination;
            })
            .addCase(request.rejected, (state, action) => {
                state.isLoading = false;
                // @ts-ignore TODO
                state.errors = action.payload;
            });
    },
});

export const {
    reducer: postReducer,
    actions: postActions,
} = postSlice;
