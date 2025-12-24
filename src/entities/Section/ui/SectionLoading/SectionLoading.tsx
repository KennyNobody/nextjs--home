import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
// import { DevFilter } from '3_features/DevFilter';
import grid from 'shared/styles/grid.module.scss';
import { Toolbar } from 'shared/ui/Toolbar/Toolbar';
import { Container } from 'shared/ui/Container/Container';
import { Stack, StackSizeType } from 'shared/ui/Stack/Stack';
import { LinkRegular } from 'shared/ui/LinkRegular/LinkRegular';
import { Skeleton, SkeletonMode } from 'shared/ui/Skeleton/Skeleton';
import cls from './SectionLoading.module.scss';

interface SectionProps {
    isPreview: boolean;
    className?: string;
}

export const SectionLoading = (props: SectionProps) => {
    const {
        isPreview,
        className,
    } = props;

    const { t } = useTranslation();

    return (
        <section className={classNames(cls.section, className)}>
            <Container>
                <Stack size={StackSizeType.MEDIUM}>
                    <div className={classNames(grid.grid, cls.grid)}>
                        <div className={classNames(grid['grid__col-2'])}>
                            <Skeleton
                                mode={SkeletonMode.BLOCK}
                                className={classNames(cls.title)}
                            />
                        </div>
                        <div className={classNames(grid['grid__col-2'])}>
                            <Skeleton
                                mode={SkeletonMode.BLOCK}
                                className={classNames(cls.title)}
                            />
                        </div>
                        {
                            !isPreview
                            && (
                                <>
                                    <div
                                        className={
                                            classNames(
                                                grid['grid__col-2'],
                                                grid['grid__col-mob-4'],
                                            )
                                        }
                                    >
                                        <LinkRegular
                                            to="#"
                                            text={t('resume')}
                                            className={classNames(cls.link)}
                                        />
                                    </div>
                                    <div
                                        className={
                                            classNames(
                                                grid['grid__col-2'],
                                                grid['grid__col-mob-4'],
                                            )
                                        }
                                    >
                                        DEVFilter
                                        {/*<DevFilter />*/}
                                    </div>
                                </>
                            )
                        }
                    </div>
                    <Skeleton
                        mode={SkeletonMode.BLOCK}
                        className={classNames(cls.main)}
                    />
                    {
                        isPreview
                        && (
                            <div className={classNames(grid.grid, cls.grid)}>
                                <div
                                    className={
                                        classNames(
                                            grid['grid__col-2'],
                                        )
                                    }
                                >
                                    <Skeleton
                                        mode={SkeletonMode.BLOCK}
                                        className={classNames(cls.link)}
                                    />
                                </div>
                                <div
                                    className={
                                        classNames(
                                            grid['grid__col-2'],
                                        )
                                    }
                                >
                                    <Toolbar>
                                        <Skeleton
                                            mode={SkeletonMode.BLOCK}
                                            className={classNames(cls.link)}
                                        />
                                        <Skeleton
                                            mode={SkeletonMode.BLOCK}
                                            className={classNames(cls.link)}
                                        />
                                    </Toolbar>
                                </div>
                            </div>
                        )
                    }
                </Stack>
            </Container>
        </section>
    );
};
