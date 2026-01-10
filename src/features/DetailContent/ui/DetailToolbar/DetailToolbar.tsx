import {
    forwardRef,
    ForwardedRef,
} from 'react';
import classNames from 'classnames';
import { Share } from 'features/Share';
import { AppTheme } from 'shared/types/Theme';
import { ArticleDevType } from 'entities/Dev';
import { ArticlePostType } from 'entities/Post';
import { ArticlePhotoType } from 'entities/Photo';
import { DateInfo } from 'shared/ui/DateInfo/DateInfo';
import Icon from 'shared/assets/icons/arrow-scroll.svg';
import cls from './DetailToolbar.module.scss';

interface DetailToolbarProps {
    theme: AppTheme;
    className?: string;
    isLoading?: boolean;
    data: ArticlePostType | ArticleDevType | ArticlePhotoType;
}

export const DetailToolbar = forwardRef((props: DetailToolbarProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {
        data,
        theme,
        isLoading,
        className,
    } = props;

    return (
        <div
            ref={ref}
            id="scroll-anchor"
            className={
                classNames(
                    cls.footer,
                    cls[`footer--${theme}`],
                    className,
                )
            }
        >
            <div className={classNames(cls['footer-grid'])}>
                <div className={classNames(cls['column-date'])}>
                    {
                        !isLoading
                        && data?.publishedAt
                        && (
                            <DateInfo
                                date={data?.publishedAt}
                                className={classNames(cls.time)}
                            />
                        )
                    }
                </div>
                <div className={classNames(cls['column-button'])}>
                    <a
                        href="#scroll-anchor"
                        className={classNames(cls.button)}
                        aria-label={'Прокрутить до тела записи'}
                    >
                        <Icon
                            className={
                                classNames(
                                    cls.icon,
                                    cls[`icon--${theme}`],
                                )
                            }
                        />
                    </a>
                </div>
                <div className={classNames(cls['column-share'])}>
                    {
                        !isLoading
                        && data
                        && (
                            <Share
                                theme={theme}
                                className={classNames(cls.share)}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
});

DetailToolbar.displayName = 'DetailToolbar';
