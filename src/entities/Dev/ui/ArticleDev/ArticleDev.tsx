import Link from 'next/link';
import classNames from 'classnames';
import { AppTheme } from 'shared/types/Theme';
import grid from 'shared/styles/grid.module.scss';
import Icon from 'shared/assets/icons/arrow-next.svg';
import { RouterLinks } from 'shared/config/routerConfig';
import { Skeleton, SkeletonMode } from 'shared/ui/Skeleton/Skeleton';
import cls from './ArticleDev.module.scss';
import { ArticleDevType } from '../../model/types/ArticleDev';

interface ArticleDevProps {
    className?: string;
    theme?: AppTheme;
    data?: ArticleDevType;
}

export const ArticleDev = (props: ArticleDevProps) => {
    const {
        data,
        theme,
        className,
    } = props;

    const skeleton = () => (
        <Skeleton
            mode={SkeletonMode.BLOCK}
            className={
                classNames(
                    cls.block,
                    theme && cls[`block--${theme}`],
                )
            }
        />
    );

    const content = () => (
        <Link
            href={`${RouterLinks.DEV_DETAIL.link}/${data?.id}`}
            className={
                classNames(
                    cls.block,
                    theme && cls[`block--${theme}`],
                    className,
                )
            }
        >
            <div className={classNames(grid.grid, cls.grid)}>
                <div className={classNames(grid['grid__col-2'], grid['grid__col-mob-3'])}>
                    <h3 className={classNames(cls.title)}>
                        { data?.title }
                    </h3>
                </div>
                <div className={classNames(grid['grid__col-mob-1'], cls['cell-mobile'])}>
                    <Icon
                        className={
                            classNames(
                                cls.icon,
                                cls['icon--mobile'],
                                theme && cls[`icon--${theme}`],
                            )
                        }
                    />
                </div>
                {/*<div className={classNames(grid['grid__col-2'], grid['grid__col-mob-4'])}>*/}
                {/*    <div className={classNames(cls.main)}>*/}
                {/*        <GridCategory*/}
                {/*            showSkeleton={false}*/}
                {/*            data={data?.tags?.data || []}*/}
                {/*        />*/}
                {/*        <Icon*/}
                {/*            className={*/}
                {/*                classNames(*/}
                {/*                    cls.icon,*/}
                {/*                    cls['icon--desktop'],*/}
                {/*                    theme && cls[`icon--${theme}`],*/}
                {/*                )*/}
                {/*            }*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </Link>
    );

    return data ? content() : skeleton();
};
