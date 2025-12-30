'use client';

import {
    appMainActions,
    AppMainResponseType,
} from 'entities/AppMain';
import { useLayoutEffect, useRef } from 'react';
import { useAppStore } from './hooks';
import { ArticlePostType, postActions } from 'entities/Post';
import { ResponseType } from '../types/ResponseType';

interface StoreInitializerProps {
    appData?: AppMainResponseType;
    postData?: ResponseType<ArticlePostType[]>;
}

export const StoreInitializer = (props: StoreInitializerProps) => {
    const {
        appData,
        postData,
    } = props;
    const store = useAppStore();
    const initialized = useRef<boolean | null>(null);

    useLayoutEffect(() => {
        if (initialized.current === null) {
            if (postData) {
                store.dispatch(postActions.setResponseData(postData));
            }

            if (appData) {
                store.dispatch(appMainActions.setResponseData(appData));
            }

            initialized.current = true;
        }
    }, []);


    return null;
};
