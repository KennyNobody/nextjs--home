'use client'

import {
    useRef,
    useMemo,
    useCallback,
} from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import {
    GridPhoto,
    getPhotoList,
    fetchPhotoList,
    getPhotoLoading,
    ArticlePhotoType,
    getPhotoPagination,
    getPhotoIsPreviewData,
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
    const isPreviewData = useSelector(getPhotoIsPreviewData);

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
            dispatch(fetchPhotoList({
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
            <GridPhoto
                data={data}
                isLoading={isLoading}
                showFooter={!isPreview}
                showSkeleton={isLoading && !data?.length}
            />
            {!isPreview && <div ref={triggerRef} />}
        </div>
    );
};