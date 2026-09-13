'use client'

import {
    useRef,
    useMemo,
    useCallback,
} from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import {
    GridDev,
    getDevList,
    fetchDevList,
    getDevLoading,
    ArticleDevType,
    getDevPagination,
    getDevIsPreviewData,
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
    const isPreviewData = useSelector(getDevIsPreviewData);

    const isReduxRelevant = isPreviewData === !!isPreview;

    const data = useMemo(() => {
        return (isReduxRelevant && dataRedux.length) ? dataRedux : (dataPrefetch || []);
    }, [isReduxRelevant, dataRedux, dataPrefetch]);
    const pagination = isReduxRelevant ? (paginationRedux ?? paginationPrefetch) : paginationPrefetch;

    const {
        pageCount = 1,
        page = 1,
    } = pagination || {};

    const loadNextPage = useCallback(() => {
        if (!isLoading && pageCount > page) {
            dispatch(fetchDevList({
                mode: 'next',
            }));
        }
    }, [pageCount, page, dispatch, isLoading]);

    useInfiniteScroll({
        triggerRef,
        callback: loadNextPage,
    });

    return (
        <div
            className={
                classNames(cls.block, className)
            }
        >
            <GridDev
                data={data}
                showSkeleton={isLoading && !data?.length}
                showEnd={!isPreview && !isLoading && page === pageCount}
            />
            {!isPreview && <div ref={triggerRef} />}
        </div>
    );
};