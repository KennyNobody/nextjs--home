'use client'

import classNames from 'classnames';
import React from 'react';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import grid from 'shared/styles/grid.module.scss';
import { Controls } from 'shared/ui/Controls/Controls';
import { Container } from 'shared/ui/Container/Container';
import { IconKey } from 'shared/ui/IconSocial/IconSocial';
import { LinkSocial } from 'shared/ui/LinkSocial/LinkSocial';
import { Skeleton, SkeletonMode } from 'shared/ui/Skeleton/Skeleton';
import cls from './Footer.module.scss';
import { FooterCaption } from '../FooterCaption/FooterCaption';
import { AppMainType } from 'entities/AppMain';

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
                                        <Controls>
                                            {/* TODO: Сделать данные динамичными */}
                                            <LinkSocial
                                                iconKey={IconKey.TG}
                                                href="https://web.telegram.org/"
                                            />
                                            <LinkSocial
                                                iconKey={IconKey.INST}
                                                href="https://www.instagram.com/"
                                            />
                                            <LinkSocial
                                                iconKey={IconKey.VK}
                                                href="https://vk.com/feed"
                                            />
                                            <LinkSocial
                                                iconKey={IconKey.GH}
                                                href="https://github.com/KennyNobody/"
                                            />
                                        </Controls>
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
