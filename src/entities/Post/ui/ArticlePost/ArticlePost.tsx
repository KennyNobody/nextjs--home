import {
    ArticleCategory,
    ArticleCategoryMode,
} from 'entities/Category';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { getMediaUrl } from 'entities/Media';
import { AppTheme } from 'shared/types/Theme';
import { RouterLinks } from 'shared/config/routerConfig';
import { Skeleton, SkeletonMode } from 'shared/ui/Skeleton/Skeleton';
import cls from './ArticlePost.module.scss';
import { ArticlePostType } from '../../model/types/ArticlePost';

interface ArticlePostProps {
    className?: string;
    theme?: AppTheme;
    data?: ArticlePostType;
}

export const ArticlePost = (props: ArticlePostProps) => {
    const { data, theme, className } = props;

    if (!data || !data.main) {
        return (
            <div className={classNames(cls.article, cls['article--skeleton'], className)}>
                <Skeleton mode={SkeletonMode.BLOCK} className={cls.skeleton} />
            </div>
        );
    }

    const { showPreview, preview, previewTitle, previewCaption } = data.main;
    const { url, alt, width, height } = getMediaUrl(preview?.data, 'large');

    return (
        <Link
            href={`${RouterLinks.POSTS_DETAIL.link}/${data.id}`}
            className={classNames(
                cls.article,
                cls['article--content'],
                theme && cls[`article--${theme}`],
                className,
            )}
        >
            {showPreview && url && (
                <picture className={cls.picture}>
                    <Image
                        alt={alt}
                        src={url}
                        width={width}
                        height={height}
                        sizes="(max-width: 1200px) 100vw, 50vw"
                    />
                </picture>
            )}

            <div className={cls.main}>
                {previewTitle && (
                    <h3 className={classNames(cls.title, theme && cls[`title--${theme}`])}>
                        {previewTitle}
                    </h3>
                )}

                {previewCaption && (
                    <p className={classNames(cls.caption, theme && cls[`caption--${theme}`])}>
                        {previewCaption}
                    </p>
                )}
            </div>

            {data.category?.data && (
                <ArticleCategory
                    theme={theme}
                    className={cls.tag}
                    data={data.category.data}
                    mode={ArticleCategoryMode.STATIC}
                />
            )}
        </Link>
    );
};