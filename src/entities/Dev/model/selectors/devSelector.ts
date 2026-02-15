import { StateSchema } from 'shared/state/StateSchema';

const getDevTag = (state: StateSchema) => state?.dev?.tag;
const getDevIsInit = (state: StateSchema) => state?.dev?.isInit;
const getDevErrors = (state: StateSchema) => state?.dev?.errors;
const getDevLoading = (state: StateSchema) => state?.dev?.isLoading;
const getDevPagination = (state: StateSchema) => state?.dev?.pagination

export {
    getDevTag,
    getDevIsInit,
    getDevErrors,
    getDevLoading,
    getDevPagination,
}
