'use client'

import { Action } from 'redux';
import { useLayoutEffect, useRef } from 'react';
import { useAppStore } from './hooks';

interface StoreInitializerProps {
    actions: Action[];
}

export const StoreInitializer = (props: StoreInitializerProps) => {
    const {
        actions,
    } = props;
    const store = useAppStore();
    const initialized = useRef<boolean | null>(null);

    useLayoutEffect(() => {
        if (initialized.current === null) {
            actions?.forEach(store.dispatch);
            initialized.current = true;
        }
    }, []);

    return null;
};
