import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { AppMainResponseType } from '../types/AppMainResponse';
import { AppMainSchema } from '../types/AppMainSchema';
import {
    fetchAppMain,
} from '../services/fetchAppMain';


const initialState: AppMainSchema = {
    data: undefined,
    isLoading: false,
    errors: undefined,
};

const appMainSlice = createSlice({
    name: 'appMain',
    initialState,
    reducers: {
        setResponseData: (state, action: PayloadAction<AppMainResponseType>) => {
            state.data = action.payload.data;
        },
        resetData: (state) => {
            state.data = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAppMain.pending, (state: AppMainSchema) => {
                state.data = undefined;
                state.isLoading = true;
            })
            .addCase(fetchAppMain.fulfilled, (state: AppMainSchema, action: PayloadAction<AppMainResponseType>) => {
                const { data } = action.payload;

                state.data = data;
                state.isLoading = false;
            })
            .addCase(fetchAppMain.rejected, (state: AppMainSchema, action) => {
                state.isLoading = false;

                // @ts-ignore TODO: Корректно типизировать ошибки
                state.errors = action.payload;
            });
    },
});

export const {
    reducer: appMainReducer,
    actions: appMainActions,
} = appMainSlice;
