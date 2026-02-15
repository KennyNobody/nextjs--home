'use client'

import {
    useRef,
    useMemo,
    useEffect,
    useCallback,
} from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import {
    GridDev,
    devActions,
    getDevList,
    fetchDevList,
    getDevIsInit,
    getDevLoading,
    ArticleDevType,
    getDevPagination,
} from 'entities/Dev';
import { useAppDispatch } from 'shared/state/hooks';
import cls from './ListDevClient.module.scss';
import { PaginationType } from 'entities/Pagination';
import { useInfiniteScroll } from 'shared/hooks/useInfiniteScroll';

interface ListDevClientProps {
    className?: string;
    isPreview?: boolean;
    dataPrefetch?: ArticleDevType[];
    paginationPrefetch?: PaginationType;
}

export const ListDevClient = (props: ListDevClientProps) => {
    const {
        isPreview,
        className,
        dataPrefetch,
        paginationPrefetch,
    } = props;

    const triggerRef = useRef<HTMLDivElement>(null);
    const isLoading: boolean = useSelector(getDevLoading) || false;
    const dispatch = useAppDispatch();
    const dataRedux: ArticleDevType[] = useSelector(getDevList.selectAll);
    const paginationRedux: PaginationType | undefined = useSelector(getDevPagination);
    const isReduxInitialized = useSelector(getDevIsInit);

    const data = useMemo(() => {
        return isReduxInitialized ? dataRedux : dataPrefetch;
    }, [isReduxInitialized, dataRedux, dataPrefetch]);
    const pagination = isReduxInitialized ? paginationRedux : paginationPrefetch;

    const {
        pageCount = 1,
        page = 1,
    } = pagination || {};

    const loadNextPage = useCallback(() => {
        if (!isLoading && pageCount > page) {
            dispatch(fetchDevList({
                mode: 'next',
                replace: false,
            }));
        }
    }, [pageCount, page, dispatch, isLoading]);

    useInfiniteScroll({
        triggerRef,
        callback: loadNextPage,
    });

    useEffect(() => {
        return () => {
            dispatch(devActions.clearListData());
        };
    }, [dispatch]);

    return (
        <div
            className={
                classNames(cls.block, className)
            }
        >
            <GridDev
                data={data}
                showSkeleton={isLoading && !data?.length}
                showEnd={!isPreview && !isLoading && !isPreview && page === pageCount}
            />
            {!isPreview && <div ref={triggerRef} />}
        </div>
    );
};
