import React from 'react';
import classNames from 'classnames';
import { AppMainType } from 'entities/AppMain';
import grid from 'shared/styles/grid.module.scss';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { Container } from 'shared/ui/Container/Container';
import { Skeleton, SkeletonMode } from 'shared/ui/Skeleton/Skeleton';
import cls from './Footer.module.scss';
import { Socials } from '../Socials/Socials';
import { FooterCaption } from '../FooterCaption/FooterCaption';

interface FooterProps {
    data: AppMainType;
    className?: string;
    isLoading?: boolean;
}

export function Footer(props: FooterProps) {
    const {
        data,
        className,
        isLoading,
    } = props;

    return (
        <div className={classNames(cls.block, className)}>
            <Container>
                <div className={classNames(grid.grid, cls.grid)}>
                    <div
                        className={
                            classNames(
                                grid['grid__col-2'],
                                grid['grid__col-mob-4'],
                            )
                        }
                    >
                        <div className={classNames(cls.info)}>
                            {
                                !isLoading
                                && (
                                    <>
                                        { data?.years && <FooterCaption className={classNames(cls['caption-left'])} data={data?.years} /> }
                                        { data?.author && <FooterCaption className={classNames(cls['caption-right'])} data={data?.author} /> }
                                    </>
                                )
                            }
                            {
                                isLoading
                                && (
                                    <>
                                        <Skeleton className={classNames(cls.skeleton)} mode={SkeletonMode.BLOCK} />
                                        <Skeleton className={classNames(cls.skeleton)} mode={SkeletonMode.BLOCK} />
                                    </>
                                )
                            }
                        </div>
                    </div>
                    <div
                        className={
                            classNames(
                                grid['grid__col-2'],
                                grid['grid__col-mob-4'],
                            )
                        }
                    >
                        <div className={classNames(cls.toolbar)}>
                            {
                                !isLoading
                                && (
                                    <>
                                        <ThemeSwitcher />
                                        <Socials />
                                    </>
                                )
                            }
                            {
                                isLoading
                                && (
                                    <>
                                        <Skeleton className={classNames(cls.skeleton)} mode={SkeletonMode.BLOCK} />
                                        <Skeleton className={classNames(cls.skeleton)} mode={SkeletonMode.BLOCK} />
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
