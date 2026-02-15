import { useMemo } from 'react';
import classNames from 'classnames';
import { End } from 'shared/ui/End/End';
import { AppTheme } from 'shared/types/Theme';
import grid from 'shared/styles/grid.module.scss';
import cls from './GridPosts.module.scss';
import { ArticlePost } from '../ArticlePost/ArticlePost';
import { ArticlePostType } from '../../model/types/ArticlePost';

interface GridPostsProps {
    className?: string;
    data?: (ArticlePostType | null)[];
    showSkeleton?: boolean;
    showEnd?: boolean;
}

export const GridPosts = (props: GridPostsProps) => {
    const {
        data,
        showSkeleton,
        className,
        showEnd,
    } = props;

    const skeleton = useMemo(() =>
        new Array(12).fill(null).map((_, index) => (
            <div
                key={index}
                className={
                    classNames(
                        grid['grid__col-1'],
                        grid['grid__col-mob-2'],
                        grid['grid__col-x-mob-4'],
                    )
                }
            >
                <ArticlePost />
            </div>
        ))
    , []);

    const content = (
        data
        && data?.length > 0
        && data.map((item: ArticlePostType | null, index: number) => {
            let propTheme;

            if (item?.main?.showPreview) {
                propTheme = item?.main?.previewInverted
                    ? AppTheme.DARK
                    : AppTheme.LIGHT;
            }

            return (
                <div
                    key={item?.id || index}
                    className={
                        classNames(
                            grid['grid__col-1'],
                            grid['grid__col-mob-2'],
                            {
                                [grid['grid__col-x-mob-4']]: item,
                            },
                            {
                                [cls['mobile-hidden']]: !item,
                            },
                        )
                    }
                >
                    {
                        item
                        && (
                            <ArticlePost
                                data={item}
                                theme={propTheme}
                            />
                        )
                    }
                </div>
            );
        })
    );

    return (
        <div className={classNames(cls.block)}>
            <div className={classNames(grid.grid, cls.grid, className)}>
                { showSkeleton ? skeleton : content }
            </div>
            {showEnd && <End />}
        </div>
    );
};
