export {
    fetchAppMainServer,
} from './model/services/fetchAppMainServer';

export {
    type AppMainResponseType,
} from './model/types/AppMainResponse';

export {
    type AppMainType,
} from './model/types/AppMain';

export {
    type AppMainSchema,
} from './model/types/AppMainSchema';

export {
    appMainActions,
    appMainReducer,
} from './model/slices/appMainSlice';

export {
    getAppMainData,
    getAppMainErrors,
    getAppMainLoading,
} from './model/selectors/appMain';
