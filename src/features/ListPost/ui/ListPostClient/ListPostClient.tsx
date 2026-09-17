'use client'

import {
    useRef,
    useMemo,
    useEffect,
    useCallback,
} from 'react';
import {
    GridPosts,
    getPostList,
    postActions,
    fetchPostList,
    getPostLoading,
    ArticlePostType,
    getPostPagination,
    getPostIsPreviewData,
} from 'entities/Post';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/state/hooks';
import { PaginationType } from 'entities/Pagination';
import { addRandomNulls } from 'shared/helpers/addRandomNulls';
import { useInfiniteScroll } from 'shared/hooks/useInfiniteScroll';
import cls from './ListPostClient.module.scss';

interface ListPostClientProps {
    className?: string;
    isPreview?: boolean;
    dataPrefetch?: ArticlePostType[];
    paginationPrefetch?: PaginationType;
}

export const ListPostClient = (props: ListPostClientProps) => {
    const {
        isPreview,
        className,
        dataPrefetch,
        paginationPrefetch,
    } = props;

    const triggerRef = useRef<HTMLDivElement>(null);
    const isLoading: boolean = useSelector(getPostLoading) || false;
    const dispatch = useAppDispatch();

    const dataRedux: ArticlePostType[] = useSelector(getPostList.selectAll);
    const paginationRedux: PaginationType | undefined = useSelector(getPostPagination);
    const isPreviewData = useSelector(getPostIsPreviewData);

    const isReduxRelevant = isPreviewData === !!isPreview;

    const data = useMemo(() => {
        return isReduxRelevant ? dataRedux : (dataPrefetch || []);
    }, [isReduxRelevant, dataRedux, dataPrefetch]);

    const pagination = isReduxRelevant ? (paginationRedux ?? paginationPrefetch) : paginationPrefetch;

    const {
        pageCount = 1,
        page = 1,
    } = pagination || {};

    const loadNextPage = useCallback(() => {
        if (!isLoading && pageCount > page) {
            dispatch(fetchPostList({
                mode: 'next',
            }));
        }
    }, [pageCount, page, dispatch, isLoading]);

    useInfiniteScroll({
        triggerRef,
        callback: loadNextPage,
    });

    const displayData = useMemo(() => {
        return isPreview ? addRandomNulls(data) : data;
    }, [isPreview, data]);

    useEffect(() => {
        dispatch(postActions.toggleCategory());
    }, [dispatch]);

    return (
        <div className={classNames(cls.block, className)}>
            <GridPosts
                data={displayData}
                isLoading={isLoading}
                showFooter={!isPreview}
                showSkeleton={isLoading && !data?.length}
            />
            {!isPreview && <div ref={triggerRef} />}
        </div>
    );
};