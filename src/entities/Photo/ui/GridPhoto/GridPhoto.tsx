import classNames from 'classnames';
import { End } from 'shared/ui/End/End';
import { AppTheme } from 'shared/types/Theme';
import grid from 'shared/styles/grid.module.scss';
import cls from './GridPhoto.module.scss';
import { ArticlePhoto } from '../ArticlePhoto/ArticlePhoto';
import { ArticlePhotoType } from '../../model/types/ArticlePhoto';
import {useMemo} from "react";

interface GridPostsProps {
    className?: string;
    data?: ArticlePhotoType[];
    showSkeleton?: boolean;
    showEnd?: boolean;
}

export const GridPhoto = (props: GridPostsProps) => {
    const {
        data,
        showSkeleton,
        className,
        showEnd,
    } = props;

    const skeleton = useMemo(() =>
        new Array(2).fill(null).map((_, index) => (
            <div
                key={index}
                className={classNames(grid['grid__col-2'], grid['grid__col-mob-4'])}
            >
                <ArticlePhoto />
            </div>
        ))
    , []);

    const content = (
        data
        && data?.length > 0
        && data.map((item: ArticlePhotoType, index: number) => {
            let propTheme;

            if (item?.main?.showPreview) {
                propTheme = item?.main?.previewInverted ? AppTheme.DARK : AppTheme.LIGHT;
            }

            return (
                <div
                    key={index}
                    className={classNames(grid['grid__col-2'], grid['grid__col-mob-4'])}
                >
                    <ArticlePhoto
                        data={item}
                        theme={propTheme}
                    />
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
