'use client';

import { useEffect } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import {
    postActions,
    fetchPostList,
    getPostCategory,
} from 'entities/Post';
import {
    ListCategory,
    ArticleCategoryType,
    getCategoryIsInit,
    getCategoryLoading,
    getCategoryList,
} from 'entities/Category';
import { useAppDispatch } from 'shared/state/hooks';
import cls from './FilterPostClient.module.scss';

interface PostFilterClientProps {
    className?: string;
    dataPrefetch?: ArticleCategoryType[];
}

export const FilterPostClient = (props: PostFilterClientProps) => {
    const {
        className,
        dataPrefetch,
    } = props;

    const dispatch = useAppDispatch();

    const isLoading: boolean = useSelector(getCategoryLoading) || false;
    const activeCategory: number | undefined = useSelector(getPostCategory);
    const dataRedux: ArticleCategoryType[] = useSelector(getCategoryList.selectAll);
    const isReduxInitialized = useSelector(getCategoryIsInit);

    const data: ArticleCategoryType[] = isReduxInitialized ? dataRedux : (dataPrefetch || []);

    const fetchData = () => {
        if (!isLoading) {
            dispatch(fetchPostList({
                mode: 'start',
                replace: true,
            }));
        }
    };

    useEffect(() => {
        console.log('Запрашиваем новую категорию');
        fetchData();
    }, [activeCategory]);

    const changeCategory = (item: ArticleCategoryType | undefined): void => {
        dispatch(postActions.toggleCategory(item?.id || undefined));
    };

    return (
        <div className={classNames(cls.block, className)}>
            <ListCategory
                data={data}
                selectEvent={changeCategory}
                selectedItem={activeCategory}
                showSkeleton={isLoading}
            />
        </div>
    );
};
