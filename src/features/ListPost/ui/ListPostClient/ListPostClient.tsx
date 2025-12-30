'use client';

import {
    useRef,
    useEffect,
    RefObject, useMemo,
} from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import {
    GridPosts,
    getPostList,
    getPostLoading,
    ArticlePostType,
    getPostPagination,
} from 'entities/Post';
import cls from './ListPostClient.module.scss';
import { PaginationType } from 'entities/Pagination';
import { useAppDispatch } from 'shared/state/hooks';
import { addRandomNulls } from 'shared/helpers/addRandomNulls';
import { useInfiniteScroll } from 'shared/hooks/useInfiniteScroll';

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

    const data = dataPrefetch || dataRedux;
    const pagination = paginationPrefetch || paginationRedux;

    const {
        pageCount = 1,
        page = 1,
    } = pagination || {};

    const loadNextPage = () => {
        if (!isLoading && (pageCount > page)) {
            // dispatch(fetchNextPostList({
            //     getData,
            //     replace: false,
            // }));
            console.log('Запрашиваем следующую страницу');
        }
    };

    useEffect(() => {
        // dispatch(fetchPostList({}));
    }, []);

    useInfiniteScroll({
        triggerRef,
        callback: loadNextPage,
    });

    const displayData = useMemo(() => {
        return isPreview ? addRandomNulls(data) : data;
    }, [isPreview, data]);


    return (
        <div className={classNames(cls.block, className)}>
            <GridPosts
                showSkeleton={isLoading && !data?.length}
                data={displayData}
                showEnd={!isPreview && !isLoading && page === pageCount}
            />
            {!isPreview && <div ref={triggerRef} />}
        </div>
    );
};
