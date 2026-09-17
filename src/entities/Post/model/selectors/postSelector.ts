import { StateSchema } from 'shared/state/StateSchema';

const getPostPagination = (state: StateSchema) => state?.post?.pagination
const getPostLoading = (state: StateSchema) => state?.post?.isLoading;
const getPostErrors = (state: StateSchema) => state?.post?.errors;
const getPostIsPreviewData = (state: StateSchema) => state?.post?.isPreviewData;
const getPostCategory = (state: StateSchema) => state?.post?.category;

export {
    getPostErrors,
    getPostLoading,
    getPostCategory,
    getPostPagination,
    getPostIsPreviewData,
}
