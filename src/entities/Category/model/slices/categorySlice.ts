import {
    createSlice,
    PayloadAction,
    createEntityAdapter,
} from '@reduxjs/toolkit';
import { StateSchema } from 'shared/state/StateSchema';
import { ResponseType } from 'shared/types/ResponseType';
import { ArticleCategoryType } from '../types/ArticleCategory';
import { CategorySchema } from '../types/CategorySchema';
import { fetchCategoryList } from '../services/fetchCategoryList';

const categoryListAdapter = createEntityAdapter<ArticleCategoryType, number>({
    selectId: (item: ArticleCategoryType) => item.id,
});

export const getCategoryList = categoryListAdapter.getSelectors<StateSchema>(
    (state) => state.category || categoryListAdapter.getInitialState(),
);

const initialState: CategorySchema = {
    isLoading: false,
    errors: undefined,
    ids: [],
    entities: {},
    isInit: false,
};

const categorySlice = createSlice({
    name: 'categorySlice',
    initialState,
    reducers: {
        setResponseData: (state, action: PayloadAction<ResponseType<ArticleCategoryType[]>>) => {
            const { data } = action.payload;

            if (data) {
                categoryListAdapter.setAll(state, data);
                state.isInit = true;
            }
        },
        clearListData: (state) => {
            categoryListAdapter.removeAll(state);
            state.isInit = false;
        }
    },
    extraReducers: (builder) => {
        const request = fetchCategoryList;

        builder
            .addCase(request.pending, (state, action) => {
                const { replace } = action.meta.arg;
                if (replace) categoryListAdapter.removeAll(state);

                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(request.fulfilled, (state, action) => {
                state.isLoading = false;
                const { data, meta } = action.payload;
                const addData =
                    action?.meta?.arg?.replace
                        ? categoryListAdapter.setAll
                        : categoryListAdapter.addMany;

                addData(state, data);
            })
            .addCase(request.rejected, (state, action) => {
                state.isLoading = false;
                // @ts-ignore TODO
                state.errors = action.payload;
            });
    },
});

export const {
    reducer: categoryReducer,
    actions: categoryActions,
} = categorySlice;
