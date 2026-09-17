import { StateSchema } from 'shared/state/StateSchema';

const getDevTag = (state: StateSchema) => state?.dev?.tag;
const getDevErrors = (state: StateSchema) => state?.dev?.errors;
const getDevLoading = (state: StateSchema) => state?.dev?.isLoading;
const getDevPagination = (state: StateSchema) => state?.dev?.pagination
const getDevIsPreviewData = (state: StateSchema) => state.dev?.isPreviewData;

export {
    getDevTag,
    getDevErrors,
    getDevLoading,
    getDevPagination,
    getDevIsPreviewData,
}
