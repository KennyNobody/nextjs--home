'use client'

import {
    postActions,
    fetchPostList,
    getPostCategory,
} from 'entities/Post';
import {
    ListCategory,
    ArticleCategoryType,
} from 'entities/Category';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/state/hooks';
import { Fieldset } from 'shared/ui/Fieldset/Fieldset';
import { useCallback } from 'react';

interface PostFilterClientProps {
    data?: ArticleCategoryType[];
}

export const FilterPostClient = (props: PostFilterClientProps) => {
    const {
        data,
    } = props;

    const dispatch = useAppDispatch();
    const activeCategory: number | undefined = useSelector(getPostCategory);

    const changeCategory = useCallback((item: ArticleCategoryType | undefined): void => {
        dispatch(postActions.toggleCategory(item?.id || undefined));
        dispatch(fetchPostList({
            mode: 'start',
            replace: true,
        }));
    }, [dispatch]);

    return (
        <Fieldset title={'Фильтр по категориям'}>
            <ListCategory
                data={data}
                selectEvent={changeCategory}
                selectedItem={activeCategory}
            />
        </Fieldset>
    );
};
