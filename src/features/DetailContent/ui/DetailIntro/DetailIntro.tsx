import classNames from 'classnames';
import {
    ListTags,
    ArticleTag,
    ArticleCategory,
    ArticleCategoryMode,
    ArticleCategoryType,
} from 'entities/Category';
import { AppTheme } from 'shared/types/Theme';
import { ArticleDevType } from 'entities/Dev';
import { ArticlePostType } from 'entities/Post';
import { ArticlePhotoType } from 'entities/Photo';
import grid from 'shared/styles/grid.module.scss';
import { Container } from 'shared/ui/Container/Container';
import { useScrollPercent } from 'shared/hooks/useScrollPercent';
import { Skeleton, SkeletonMode } from 'shared/ui/Skeleton/Skeleton';
import cls from './DetailIntro.module.scss';

interface DetailIntroProps {
    theme: AppTheme;
    className?: string;
    isLoading?: boolean;
    data?: ArticlePostType | ArticleDevType | ArticlePhotoType;
}

export const DetailIntro = (props: DetailIntroProps) => {
    const {
        data,
        theme,
        isLoading,
        className,
    } = props;

    const opacity = useScrollPercent(1);
    const tagArray = data?.tags?.data;
    const category = data?.category?.data;
    const isInverted = data?.main?.previewInverted;

    return (
        <div
            className={
                classNames(
                    cls.intro,
                    cls[`intro--${theme}`],
                    className,
                )
            }
        >
            <Container>
                <div
                    hidden={opacity < 0}
                    className={
                        classNames(cls['intro-content'])
                    }
                >
                    <div className={classNames(grid.grid)}>
                        <div
                            className={
                                classNames(
                                    grid['grid__col-2'],
                                    grid['grid__col-lap-3'],
                                    grid['grid__col-mob-4'],
                                    cls['column-title'],
                                )
                            }
                        >
                            <h1 className={classNames(cls.title)}>
                                {
                                    !isLoading
                                    && (
                                        <>
                                            {data?.main?.previewTitle}
                                            <br />
                                            {data?.main?.previewCaption}
                                        </>
                                    )
                                }
                                {
                                    isLoading
                                    && (
                                        <Skeleton
                                            strings={2}
                                            mode={SkeletonMode.LINES}
                                        />
                                    )
                                }
                            </h1>
                        </div>
                        <div
                            className={
                                classNames(
                                    grid['grid__col-2'],
                                    grid['grid__col-lap-1'],
                                    grid['grid__col-mob-4'],
                                    cls['column-cat'],
                                )
                            }
                        >
                            <div className={classNames(cls['toolbar-category'])}>
                                {
                                    category
                                    && (
                                        <ArticleCategory
                                            theme={theme}
                                            data={category}
                                            mode={ArticleCategoryMode.STATIC}
                                        />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className={classNames(cls['main-content'])}>
                        <div className={classNames(grid.grid, cls.grid)}>
                            <div
                                className={
                                    classNames(
                                        grid['grid__col-2'],
                                        grid['grid__col-mob-4'],
                                    )
                                }
                            >
                                {
                                    tagArray
                                    && tagArray?.length > 0
                                    && (
                                        <ListTags>
                                            {tagArray.map((item: ArticleCategoryType) => (
                                                <ArticleTag
                                                    data={item}
                                                    key={item.id}
                                                    theme={isInverted ? AppTheme.DARK : AppTheme.LIGHT}
                                                />
                                            ))}
                                        </ListTags>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};
