'use client';

import classNames from 'classnames';
import { useSelector } from 'react-redux';
import {
    ListCategory,
    getCategoryList,
    getCategoryIsInit,
    getCategoryLoading,
    ArticleCategoryType,
} from 'entities/Category';
import cls from './FilterDevClient.module.scss';
import { useAppDispatch } from 'shared/state/hooks';
import { devActions, fetchDevList, getDevTag } from 'entities/Dev';

interface FilterDevClientProps {
    className?: string;
    dataPrefetch?: ArticleCategoryType[];
}

export const FilterDevClient = (props: FilterDevClientProps) => {
    const {
        className,
        dataPrefetch,
    } = props;

    const dispatch = useAppDispatch();
    const isLoading: boolean = useSelector(getCategoryLoading) || false;
    const activeTag: number | undefined = useSelector(getDevTag);
    const dataRedux: ArticleCategoryType[] = useSelector(getCategoryList.selectAll);
    const isReduxInitialized = useSelector(getCategoryIsInit);
    const data: ArticleCategoryType[] = isReduxInitialized ? dataRedux : (dataPrefetch || []);

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
                showSkeleton={isLoading}
            />
        </div>
    );
};
