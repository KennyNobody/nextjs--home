import Link from 'next/link';
import Image from 'next/image';
import {
    ArticleCategory,
    ArticleCategoryMode,
} from 'entities/Category';
import classNames from 'classnames';
import {
    Skeleton,
    SkeletonMode,
} from 'shared/ui/Skeleton/Skeleton';
import { AppTheme } from 'shared/types/Theme';
import cls from './ArticlePhoto.module.scss';
import { _BASE_URL_ } from 'shared/config/envConfig';
import { RouterLinks } from 'shared/config/routerConfig';
import { ArticlePhotoType } from '../../model/types/ArticlePhoto';

interface ArticlePhotoProps {
    className?: string;
    theme?: AppTheme;
    data?: ArticlePhotoType;
}

export const ArticlePhoto = (props: ArticlePhotoProps) => {
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
                    theme && cls[`article--${theme}`],
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
            href={`${RouterLinks.PHOTO_DETAIL.link}/${data?.id}`}
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
