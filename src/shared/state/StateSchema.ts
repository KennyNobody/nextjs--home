import { AxiosInstance } from 'axios';
import { AppMainSchema } from 'entities/AppMain';
import { PostSchema } from 'entities/Post';
import { CategorySchema } from 'entities/Category';

interface StateSchema {
    appMain?: AppMainSchema;
    post?: PostSchema;
    category?: CategorySchema;
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
