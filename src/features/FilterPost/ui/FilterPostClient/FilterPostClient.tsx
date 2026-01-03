'use client';

import {
    postActions,
    fetchPostList,
    getPostCategory,
} from 'entities/Post';
import {
    ListCategory,
    ArticleCategoryType,
} from 'entities/Category';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/state/hooks';
import cls from './FilterPostClient.module.scss';

interface PostFilterClientProps {
    className?: string;
    data?: ArticleCategoryType[];
}

export const FilterPostClient = (props: PostFilterClientProps) => {
    const {
        data,
        className,
    } = props;

    const dispatch = useAppDispatch();
    const activeCategory: number | undefined = useSelector(getPostCategory);

    const changeCategory = (item: ArticleCategoryType | undefined): void => {
        dispatch(postActions.toggleCategory(item?.id || undefined));
        dispatch(fetchPostList({
            mode: 'start',
            replace: true,
        }));
    };

    return (
        <div className={classNames(cls.block, className)}>
            <ListCategory
                data={data}
                selectEvent={changeCategory}
                selectedItem={activeCategory}
            />
        </div>
    );
};
