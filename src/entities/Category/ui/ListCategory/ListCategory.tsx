import classNames from 'classnames';
import cls from './ListCategory.module.scss';
import {
    ArticleCategory,
    ArticleCategoryMode,
} from '../ArticleCategory/ArticleCategory';
import { ArticleCategoryType } from '../../model/types/ArticleCategory';

interface ListCategoryProps {
    className?: string;
    showSkeleton: boolean;
    selectedItem: number | undefined;
    data: ArticleCategoryType[] | undefined;
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

    const skeleton = (
        new Array(5).fill(null).map((_, index: number) => (
            <ArticleCategory
                key={index}
                mode={ArticleCategoryMode.STATIC}
            />
        ))
    );

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
