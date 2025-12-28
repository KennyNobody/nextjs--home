import { AxiosInstance } from 'axios';
import { AppMainSchema } from 'entities/AppMain';
import { PostSchema } from 'entities/Post';

interface StateSchema {
    appMain?: AppMainSchema;
    post?: PostSchema;
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
