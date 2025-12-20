import { userActions } from 'entities/User';
import { ThunkDispatch } from 'redux-thunk';
import { StrapiApiError } from 'shared/types/ErrorTypes';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const handleThunkError = (error: StrapiApiError, dispatch: ThunkDispatch<unknown, unknown, unknown>) => {
    if (error.status === 401) {
        dispatch(userActions.logOut());
    }
    return error;
};
