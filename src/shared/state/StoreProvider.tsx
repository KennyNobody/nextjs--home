/* eslint-disable react-hooks/refs */
'use client';

import { Provider } from 'react-redux';
import { ReactNode, useRef } from 'react';
import { makeStore, AppStore } from './state';

interface StoreProviderProps {
    children: ReactNode;
}

export default function StoreProvider(props: StoreProviderProps) {
    const { children } = props;
    const storeRef = useRef<AppStore | null>(null);

    if (storeRef.current === null) {
        storeRef.current = makeStore();
    }

    return <Provider store={storeRef.current!}>{children}</Provider>;
}
