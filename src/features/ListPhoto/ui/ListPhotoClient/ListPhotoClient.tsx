'use client'

import {
    useRef,
    useEffect, useCallback,
} from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import {
    GridPhoto,
    photoActions,
    getPhotoList,
    getPhotoIsInit,
    fetchPhotoList,
    getPhotoLoading,
    ArticlePhotoType,
    getPhotoPagination,
} from 'entities/Photo';
import cls from './ListPhotoClient.module.scss';
import { PaginationType } from 'entities/Pagination';
import { useAppDispatch } from 'shared/state/hooks';
import { useInfiniteScroll } from 'shared/hooks/useInfiniteScroll';

interface ListPhotoClientProps {
    className?: string;
    isPreview?: boolean;
    dataPrefetch?: ArticlePhotoType[];
    paginationPrefetch?: PaginationType;
}

export const ListPhotoClient = (props: ListPhotoClientProps) => {
    const {
        isPreview,
        className,
        dataPrefetch,
        paginationPrefetch,
    } = props;

    const triggerRef = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();
    const dataRedux: ArticlePhotoType[] = useSelector(getPhotoList.selectAll);

    const isLoading: boolean = useSelector(getPhotoLoading) || false;
    const paginationRedux: PaginationType | undefined = useSelector(getPhotoPagination);
    const isReduxInitialized = useSelector(getPhotoIsInit);

    const data = isReduxInitialized ? dataRedux : (dataPrefetch || []);
    const pagination = isReduxInitialized ? paginationRedux : paginationPrefetch;

    const {
        pageCount = 1,
        page = 1,
    } = pagination || {};

    const loadNextPage = useCallback(() => {
        if (!isLoading && pageCount > page) {
            dispatch(fetchPhotoList({
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
            dispatch(photoActions.clearListData());
        };
    }, [dispatch]);

    return (
        <div
            className={
                classNames(cls.block, className)
            }
        >
            <GridPhoto
                data={data}
                showSkeleton={isLoading && !data?.length}
                showEnd={!isPreview && !isLoading && page === pageCount}
            />
            {!isPreview && <div ref={triggerRef} />}
        </div>
    );
};
