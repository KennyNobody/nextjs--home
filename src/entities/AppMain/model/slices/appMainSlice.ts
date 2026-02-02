import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { DataLabels } from 'shared/labels/data';
import { fetchAppMain } from '../services/fetchAppMain';
import { AppMainSchema } from '../types/AppMainSchema';
import { AppMainResponseType } from '../types/AppMainResponse';


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
            .addCase(fetchAppMain.rejected, (state: AppMainSchema, action: PayloadAction<string | undefined>) => {
                state.isLoading = false;
                state.errors = action?.payload ?? DataLabels.UNKNOWS_ERROR;
            });
    },
});

export const {
    reducer: appMainReducer,
    actions: appMainActions,
} = appMainSlice;
