import { StateSchema } from 'shared/state/StateSchema';

const getPostPagination = (state: StateSchema) => state?.post?.pagination
const getPostLoading = (state: StateSchema) => state?.post?.isLoading;
const getPostErrors = (state: StateSchema) => state?.post?.errors;
const getPostIsInit = (state: StateSchema) => state?.post?.isInit;
const getPostCategory = (state: StateSchema) => state?.post?.category;

export {
    getPostIsInit,
    getPostErrors,
    getPostLoading,
    getPostCategory,
    getPostPagination,
}
