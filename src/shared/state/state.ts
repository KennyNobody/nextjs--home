import { $apiClient } from '../api/apiClient';
import { configureStore } from '@reduxjs/toolkit';
import { appMainReducer } from 'entities/AppMain';
import { postReducer } from 'entities/Post';
import { devReducer } from 'entities/Dev';
import { photoReducer } from 'entities/Photo';

const rootReducer = {
    appMain: appMainReducer,
    post: postReducer,
    dev: devReducer,
    photo: photoReducer,
};

const makeStore = (preloadedState?: Partial<ReturnType<typeof configureStore>['getState']>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        api: $apiClient,
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
