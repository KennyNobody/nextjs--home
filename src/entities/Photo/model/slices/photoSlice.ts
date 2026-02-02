import {
    createSlice,
    PayloadAction,
    createEntityAdapter,
} from '@reduxjs/toolkit';
import { ArticlePhotoType } from '../types/ArticlePhoto';
import { PhotoSchema } from '../types/PhotoSchema';
import { fetchPhotoList } from '../services/fetchPhotoList';
import { StateSchema } from 'shared/state/StateSchema';
import { ResponseType } from 'shared/types/ResponseType';
import {DataLabels} from "../../../../shared/labels/data";

const photoListAdapter = createEntityAdapter<ArticlePhotoType, number>({
    selectId: (item: ArticlePhotoType) => item.id,
});

export const getPhotoList = photoListAdapter.getSelectors<StateSchema>(
    (state) => state.photo || photoListAdapter.getInitialState(),
);

const initialState: PhotoSchema = {
    isLoading: false,
    errors: undefined,
    ids: [],
    entities: {},
    isInit: false,
    pagination: undefined,
    currentRequestId: undefined,
};

const photoSlice = createSlice({
    name: 'photoSlice',
    initialState,
    reducers: {
        setResponseData: (state, action: PayloadAction<ResponseType<ArticlePhotoType[]>>) => {
            const { data, meta } = action.payload;

            if (data && meta?.pagination) {
                state.pagination = meta.pagination;
                photoListAdapter.setAll(state, data);
                state.isInit = true;
            }
        },
        clearListData: (state) => {
            photoListAdapter.removeAll(state);
            state.pagination = undefined;
            state.isInit = false;
        },
    },
    extraReducers: (builder) => {
        const request = fetchPhotoList;

        builder
            .addCase(request.pending, (state, action) => {
                const { replace } = action.meta.arg;
                if (replace) {
                    photoListAdapter.removeAll(state);
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
                        ? photoListAdapter.setAll
                        : photoListAdapter.addMany;
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
    reducer: photoReducer,
    actions: photoActions,
} = photoSlice;
