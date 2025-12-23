import { AxiosInstance } from 'axios';
import { AppMainSchema } from 'entities/AppMain';

interface StateSchema {
    appMain?: AppMainSchema;
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
