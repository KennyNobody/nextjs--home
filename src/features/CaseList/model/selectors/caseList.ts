import { StateSchema } from 'shared/state/StateSchema';

const getCaseListLoading = (state: StateSchema) => state?.caseList?.isLoading;
const getCaseListErrors = (state: StateSchema) => state?.caseList?.errors;
const getCaseListPagination = (state: StateSchema) => state?.caseList?.pagination;

export {
    getCaseListErrors,
    getCaseListLoading,
    getCaseListPagination,
}
