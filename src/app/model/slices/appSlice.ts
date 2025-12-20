import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { AppSchema } from '../types/AppSchema';


const initialState: AppSchema = {
    modalOpen: false,
    sidebarOpen: false,
};

const appSlice = createSlice({
    name: 'appData',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<boolean>) => {
            state.modalOpen = action.payload;
        },
        toggleSidebar: (state) => {
            state.sidebarOpen = !state.sidebarOpen;
        },
    },
});

export const {
    reducer: appReducer,
    actions: appActions,
} = appSlice;
