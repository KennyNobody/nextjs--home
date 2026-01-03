import { AxiosInstance } from 'axios';
import { AppMainSchema } from 'entities/AppMain';
import { PostSchema } from 'entities/Post';
import { DevSchema } from 'entities/Dev';
import { PhotoSchema } from 'entities/Photo';

interface StateSchema {
    appMain?: AppMainSchema;
    post?: PostSchema;
    dev?: DevSchema;
    photo?: PhotoSchema;
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
