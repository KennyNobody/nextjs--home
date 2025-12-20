import { AppSchema } from 'app';
import { AxiosInstance } from 'axios';
import { CaseListSchema } from 'features/CaseList';

interface StateSchema {
    app?: AppSchema;
    caseList?: CaseListSchema;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}

export type {
    ThunkConfig,
    StateSchema,
};
