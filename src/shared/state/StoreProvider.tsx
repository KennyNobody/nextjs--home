/* eslint-disable react-hooks/refs */
'use client';

import { Provider } from 'react-redux';
import { ReactNode, useRef } from 'react';
import { makeStore, AppStore, RootState } from './state';

interface StoreProviderProps {
    children: ReactNode;
    preloadedState?: Partial<RootState>;
}

export default function StoreProvider(props: StoreProviderProps) {
    const { children, preloadedState  } = props;
    const storeRef = useRef<AppStore | null>(null);

    if (storeRef.current === null) {
        storeRef.current = makeStore(preloadedState);
    }

    return <Provider store={storeRef.current!}>{children}</Provider>;
}
