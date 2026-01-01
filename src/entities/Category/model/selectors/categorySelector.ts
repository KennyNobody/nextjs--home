import { StateSchema } from 'shared/state/StateSchema';

const getCategoryLoading = (state: StateSchema) => state?.category?.isLoading;
const getCategoryErrors = (state: StateSchema) => state?.category?.errors;
const getCategoryIsInit = (state: StateSchema) => state?.category?.isInit;

export {
    getCategoryIsInit,
    getCategoryErrors,
    getCategoryLoading,
}
