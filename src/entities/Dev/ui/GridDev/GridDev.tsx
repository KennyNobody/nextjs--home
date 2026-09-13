import { useMemo } from 'react';
import classNames from 'classnames';
import { End } from 'shared/ui/End/End';
import cls from './GridDev.module.scss';
import { ArticleDev } from '../ArticleDev/ArticleDev';
import { ArticleDevType } from '../../model/types/ArticleDev';

interface ListDevProps {
    className?: string;
    isLoading?: boolean;
    showFooter?: boolean;
    showSkeleton?: boolean;
    data?: ArticleDevType[];
}

export const GridDev = (props: ListDevProps) => {
    const {
        data,
        className,
        isLoading,
        showFooter,
        showSkeleton,
    } = props;

    const skeleton = useMemo(() =>
        new Array(3).fill(null).map((_, index) => (
            <li key={index}>
                <ArticleDev />
            </li>
        ))
    , []);

    const content = (
        data?.map((item) => (
            <li key={item.id}>
                <ArticleDev
                    data={item}
                />
            </li>
        ))
    );

    return (
        <div className={classNames(cls.block)}>
            <ul className={classNames(cls.list, className)}>
                { showSkeleton ? skeleton : content }
            </ul>
            {
                showFooter
                && (
                    <End text={isLoading ? 'Загрузка...' : 'Дальше ничего нет'} />
                )
            }
        </div>
    );
};
