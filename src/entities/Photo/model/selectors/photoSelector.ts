import { StateSchema } from 'shared/state/StateSchema';

const getPhotoPagination = (state: StateSchema) => state?.photo?.pagination
const getPhotoLoading = (state: StateSchema) => state?.photo?.isLoading;
const getPhotoErrors = (state: StateSchema) => state?.photo?.errors;
const getPhotoIsInit = (state: StateSchema) => state?.photo?.isInit;

export {
    getPhotoIsInit,
    getPhotoErrors,
    getPhotoLoading,
    getPhotoPagination,
}
