'use client';

import { ReactNode, useEffect } from 'react';
import { useAppDispatch } from 'shared/state/hooks';
import { appMainActions, AppMainResponseType } from 'entities/AppMain';

interface AppLayoutClientProps {
    children: ReactNode;
    data: AppMainResponseType;
}

export const AppLayoutClient = (props: AppLayoutClientProps) => {
    const {
        data,
        children,
    } = props;

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(appMainActions.setResponseData(data));
    }, [data])

    return (
        <>
            { children }
        </>
    );
};
