import { StateSchema } from 'shared/state/StateSchema';

const getAppMainLoading = (state: StateSchema) => state?.appMain?.isLoading;
const getAppMainErrors = (state: StateSchema) => state?.appMain?.errors;
const getAppMainData = (state: StateSchema) => state?.appMain?.data;

export {
    getAppMainData,
    getAppMainErrors,
    getAppMainLoading,
}
