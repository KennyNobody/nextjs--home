'use client';

import classNames from 'classnames';
import { useSelector } from 'react-redux';
import {
    ListCategory,
    ArticleCategoryType,
} from 'entities/Category';
import cls from './FilterDevClient.module.scss';
import { useAppDispatch } from 'shared/state/hooks';
import { devActions, fetchDevList, getDevTag } from 'entities/Dev';

interface FilterDevClientProps {
    className?: string;
    data?: ArticleCategoryType[];
}

export const FilterDevClient = (props: FilterDevClientProps) => {
    const {
        data,
        className,
    } = props;

    const dispatch = useAppDispatch();
    const activeTag: number | undefined = useSelector(getDevTag);

    const changeTag = (item: ArticleCategoryType | undefined): void => {
        dispatch(devActions.toggleTag(item?.id || undefined));
        dispatch(fetchDevList({
            mode: 'start',
            replace: true,
        }));
    }

    return (
        <div className={classNames(cls.block, className)}>
            <ListCategory
                data={data}
                selectEvent={changeTag}
                selectedItem={activeTag}
            />
        </div>
    );
};
