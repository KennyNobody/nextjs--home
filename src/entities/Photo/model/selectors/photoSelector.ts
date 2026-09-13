import { StateSchema } from 'shared/state/StateSchema';

const getPhotoPagination = (state: StateSchema) => state?.photo?.pagination
const getPhotoLoading = (state: StateSchema) => state?.photo?.isLoading;
const getPhotoErrors = (state: StateSchema) => state?.photo?.errors;
const getPhotoIsPreviewData = (state: StateSchema) => state.photo?.isPreviewData;

export {
    getPhotoErrors,
    getPhotoLoading,
    getPhotoPagination,
    getPhotoIsPreviewData,
}
