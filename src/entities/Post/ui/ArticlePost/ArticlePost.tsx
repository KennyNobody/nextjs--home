import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import {
    ArticleCategory,
    ArticleCategoryMode,
} from 'entities/Category';
import cls from './ArticlePost.module.scss';
import { ArticlePostType } from '../../model/types/ArticlePost';
import { AppTheme } from 'shared/types/Theme';
import { _BASE_URL_ } from 'shared/config/envConfig';
import { RouterLinks } from 'shared/config/routerConfig';
import { Skeleton, SkeletonMode } from 'shared/ui/Skeleton/Skeleton';

interface ArticlePostProps {
    className?: string;
    theme?: AppTheme;
    data?: ArticlePostType;
}

export const ArticlePost = (props: ArticlePostProps) => {
    const {
        data,
        theme,
        className,
    } = props;

    const previewUrl = data?.main?.preview?.data?.formats?.large?.url
        || data?.main?.preview?.data?.formats?.medium?.url
        || data?.main?.preview?.data?.formats?.small?.url || '';
    const altText = data?.main?.preview?.data?.alternativeText || '#';

    const skeleton = () => (
        <div
            className={
                classNames(
                    cls.article,
                    cls['article--skeleton'],
                    className,
                )
            }
        >
            <Skeleton
                mode={SkeletonMode.BLOCK}
                className={classNames(cls.skeleton)}
            />
        </div>
    );

    const article = () => (
        <Link
            href={`${RouterLinks.POSTS_DETAIL.link}/${data?.id}`}
            className={
                classNames(
                    cls.article,
                    cls['article--content'],
                    theme && cls[`article--${theme}`],
                    className,
                )
            }
        >
            {
                data?.main?.showPreview
                && previewUrl
                && (
                    <picture className={classNames(cls.picture)}>
                        <Image
                            fill={true}
                            alt={altText}
                            src={`${_BASE_URL_}${previewUrl}`}
                            sizes="(max-width: 1200px) 100vw, 50vw"
                        />
                    </picture>
                )
            }
            <div className={classNames(cls.main)}>
                {data?.main?.previewTitle && (
                    <h3
                        className={
                            classNames(
                                cls.title,
                                theme && cls[`title--${theme}`],
                            )
                        }
                    >
                        {data.main.previewTitle}
                    </h3>
                )}
                {
                    data?.main?.previewCaption && (
                        <p
                            className={
                                classNames(
                                    cls.caption,
                                    theme && cls[`caption--${theme}`],
                                )
                            }
                        >
                            {data.main.previewCaption}
                        </p>
                    )
                }
            </div>
            {
                data?.category?.data
                && (
                    <ArticleCategory
                        theme={theme}
                        className={cls.tag}
                        data={data?.category?.data}
                        mode={ArticleCategoryMode.STATIC}
                    />
                )
            }
        </Link>
    );

    return data ? article() : skeleton();
};
