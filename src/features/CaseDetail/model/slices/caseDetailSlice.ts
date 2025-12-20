import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { CaseDetailResponseType } from '../types/CaseDetail';
import { CaseDetailSchema } from '../types/CaseDetailSchema';
import {
    fetchCaseDetail
} from '../services/fetchCaseDetail/fetchCaseDetail';


const initialState: CaseDetailSchema = {
    data: undefined,
    isLoading: undefined,
    errors: undefined,
};

const caseDetailSlice = createSlice({
    name: 'caseDetail',
    initialState,
    reducers: {
        setResponseData: (state, action: PayloadAction<CaseDetailResponseType>) => {
            state.data = action.payload.data;
        },
        resetData: (state) => {
            state.data = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCaseDetail.pending, (state: CaseDetailSchema) => {
                state.data = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCaseDetail.fulfilled, (state: CaseDetailSchema, action) => {
                const { data } = action.payload;

                state.data = data;
                state.isLoading = false;
            })
            .addCase(fetchCaseDetail.rejected, (state: CaseDetailSchema) => {
                state.isLoading = false;
                // TODO: Указать правильные типы
                // @ts-expect-error
                state.errors = action.payload;
            });
    },
});

export const {
    reducer: caseDetailReducer,
    actions: caseDetailActions,
} = caseDetailSlice;
