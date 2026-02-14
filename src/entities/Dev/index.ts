export {
    type DevSchema,
} from './model/types/DevSchema';

export {
    devActions,
    devReducer,
    getDevList,
} from './model/slices/devSlice';

export {
    type ArticleDevType,
} from './model/types/ArticleDev';

export {
    GridDev,
} from './ui/GridDev/GridDev';

export {
    getDevTag,
    getDevErrors,
    getDevIsInit,
    getDevLoading,
    getDevPagination,
} from './model/selectors/devSelector';

export {
    fetchDevList,
} from './model/services/fetchDevList';
