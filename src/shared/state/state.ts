import { appReducer } from 'app';
import { configureStore } from '@reduxjs/toolkit';
import { caseListReducer } from 'features/CaseList';
import {$api} from '../api/api';

const rootReducer = {
    app: appReducer,
    caseList: caseListReducer,
};

const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        api: $api,
                    },
                },
            }).concat(),
    });
};

type AppStore = ReturnType<typeof makeStore>;
type RootState = ReturnType<AppStore['getState']>;
type AppDispatch = AppStore['dispatch'];

export {
    makeStore,
    type RootState,
    type AppStore,
    type AppDispatch,
}
