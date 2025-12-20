import { StateSchema } from 'shared/state/StateSchema';

const getCaseDetailLoading = (state: StateSchema) => state?.caseDetail?.isLoading;
const getCaseDetailErrors = (state: StateSchema) => state?.caseDetail?.errors;
const getCaseDetailData = (state: StateSchema) => state?.caseDetail?.data;

export {
    getCaseDetailData,
    getCaseDetailErrors,
    getCaseDetailLoading,
}
