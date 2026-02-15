import classNames from 'classnames';
import {
    ArticleCategory,
    ArticleCategoryMode,
} from '../ArticleCategory/ArticleCategory';
import cls from './GridCategory.module.scss';
import { ArticleCategoryType } from '../../model/types/ArticleCategory';

interface GridCategoryProps {
    className?: string;
    showSkeleton: boolean;
    data: ArticleCategoryType[];
}

export const GridCategory = (props: GridCategoryProps) => {
    const {
        data,
        className,
        showSkeleton,
    } = props;

    const skeleton = (
        new Array(4).fill(null).map((_, index: number) => (
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
                mode={ArticleCategoryMode.STATIC}
            />
        ))
    );

    return (
        <div className={classNames(cls.block, className)}>
            { showSkeleton ? skeleton : content }
        </div>
    );
};
