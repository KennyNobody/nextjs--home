
import {
    useRef,
    useEffect,
    RefObject,
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
import cls from './ListPost.module.scss';
import { PaginationType } from 'entities/Pagination';
import { useAppDispatch } from 'shared/state/hooks';
import { addRandomNulls } from 'shared/helpers/addRandomNulls';
import { useInfiniteScroll } from 'shared/hooks/useInfiniteScroll';
import {fetchPostList} from "../../../entities/Post/model/services/fetchPostList";

interface ListPostsProps {
    className?: string;
    isPreview?: boolean;
}

export const ListPost = (props: ListPostsProps) => {
    const {
        isPreview,
        className,
    } = props;

    const triggerRef = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();
    const data: ArticlePostType[] = useSelector(getPostList.selectAll);
    const isLoading: boolean = useSelector(getPostLoading) || false;
    const pagination: PaginationType | undefined = useSelector(getPostPagination);

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
        dispatch(fetchPostList({}));
    }, []);

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
            <GridPosts
                showSkeleton={isLoading && !data?.length}
                data={isPreview ? addRandomNulls(data) : data}
                showEnd={!isPreview && !isLoading && page === pageCount}
            />
            {!isPreview && <div ref={triggerRef} />}
        </div>
    );
};
