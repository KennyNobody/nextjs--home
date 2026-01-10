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
    getPostIsInit,
    getPostLoading,
    ArticlePostType,
    getPostPagination,
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
    const isReduxInitialized = useSelector(getPostIsInit);

    const data = isReduxInitialized ? dataRedux : (dataPrefetch || []);
    const pagination = isReduxInitialized ? paginationRedux : paginationPrefetch;

    const {
        pageCount = 1,
        page = 1,
    } = pagination || {};

    // TODO: Какой в этом смысл?
    const loadNextPage = useCallback(() => {
        if (!isLoading && pageCount > page) {
            dispatch(fetchPostList({
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
            dispatch(postActions.clearListData());
        };
    }, []);

    const displayData = useMemo(() => {
        return isPreview ? addRandomNulls(data) : data;
    }, [isPreview, data]);

    return (
        <div className={classNames(cls.block, className)}>
            <GridPosts
                data={displayData}
                showSkeleton={isLoading && !data?.length}
                showEnd={!isPreview && !isLoading && page === pageCount}
            />
            {!isPreview && <div ref={triggerRef} />}
        </div>
    );
};
