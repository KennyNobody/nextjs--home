import classNames from 'classnames';

import { ArticleCategoryType } from '../../model/types/ArticleCategory';
import {
    ArticleCategory,
    ArticleCategoryMode,
} from '../ArticleCategory/ArticleCategory';
import cls from './ListCategory.module.scss';
import { useMemo } from 'react';

interface ListCategoryProps {
    className?: string;
    showSkeleton?: boolean;
    selectedItem?: number;
    data?: ArticleCategoryType[];
    selectEvent?: (arg?: ArticleCategoryType) => void;
}

export const ListCategory = (props: ListCategoryProps) => {
    const {
        data,
        className,
        selectEvent,
        showSkeleton,
        selectedItem,
    } = props;

    const skeleton = useMemo(() =>
        new Array(5).fill(null).map((_, index: number) => (
            <ArticleCategory
                key={index}
                mode={ArticleCategoryMode.STATIC}
            />
        ))
    , []);

    const content = (
        data
        && data?.length > 0
        && data.map((item: ArticleCategoryType) => (
            <ArticleCategory
                data={item}
                key={item.id}
                name="category"
                onClick={selectEvent}
                mode={ArticleCategoryMode.INPUT}
                isActive={selectedItem === item.id}
            />
        ))
    );

    return (
        <form className={classNames(cls.nav, className)}>
            { showSkeleton ? skeleton : content }
        </form>
    );
};
