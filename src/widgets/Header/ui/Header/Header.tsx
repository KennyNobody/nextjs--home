'use client'

import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import grid from 'shared/styles/grid.module.scss';
import React, { useEffect, useState } from 'react';
import { Overlay } from 'shared/ui/Overlay/Overlay';
import { LinkNav } from 'shared/ui/LinkNav/LinkNav';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import useRouteConfig from 'shared/hooks/useLayoutMode';
import { RouterLinks } from 'shared/config/routerConfig';
import { PageLayoutMode } from 'shared/types/PageLayout';
import { ContentKeyType } from 'shared/types/CommonTypes';
import { Container } from 'shared/ui/Container/Container';
import { AppMainType } from 'entities/AppMain/model/types/AppMain';
import { WidgetMobile } from 'shared/ui/WidgetMobile/WidgetMobile';
import { Nav } from '../Nav/Nav';
import { Head } from '../Head/Head';
import { Name } from '../Name/Name';
import cls from './Header.module.scss';
import { Avatar } from '../Avatar/Avatar';
import { Description } from '../Description/Description';
import { MenuMobileButton } from '../MenuMobileButton/MenuMobileButton';
import {RemoveScroll} from "react-remove-scroll";

interface HeaderProps {
    data: AppMainType;
    className?: string;
}


export const Header = (props: HeaderProps) => {
    const {
        data,
        className,
    } = props;

    const pathname = usePathname();
    const { layoutMode } = useRouteConfig();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsOpen(false);
    }, [pathname]);

    const gridColClasses = classNames(grid['grid__col-2'], grid['grid__col-mob-4']);

    return (
        <>
            <Overlay
                isVisible={isOpen}
                className={classNames(cls.overlay)}
            />
            <div
                className={
                    classNames(
                        cls.block,
                        cls[`block--${layoutMode}`],
                        className,
                    )
                }
            >
                <Container>
                    <div className={classNames(grid.grid)}>
                        {/* Левая колонка */}
                        <div
                            className={
                                classNames(gridColClasses)
                            }
                        >

                            <div
                                className={
                                    classNames(
                                        cls.head,
                                        className,
                                    )
                                }
                            >
                                <div className={classNames(cls.wrapper)}>
                                    <Head
                                        isMain={layoutMode === PageLayoutMode.FRONT}
                                    >
                                        <Avatar
                                            isMain={layoutMode === PageLayoutMode.FRONT}
                                            className={classNames(cls.avatar)}
                                            url={data?.preview?.data?.formats?.small?.url}
                                        />
                                        <Name
                                            name={data?.name}
                                            nickname={data?.nickname}
                                            isMain={layoutMode === PageLayoutMode.FRONT}
                                            className={
                                                classNames(
                                                    cls.name,
                                                    { [cls['name--front']]: layoutMode !== PageLayoutMode.FRONT },
                                                )
                                            }
                                        />
                                        <MenuMobileButton
                                            className={classNames(cls.button)}
                                            aria-label={'Раскрыть мобильное меню'}
                                            onClick={() => setIsOpen(prev => !prev)}
                                        />
                                    </Head>
                                </div>
                                { /* Мобильное меню */ }
                                <RemoveScroll enabled={isOpen}>
                                    <div className={classNames(cls.relative)}>
                                        <nav
                                            hidden={!isOpen}
                                            className={classNames(cls.nav, cls['nav--mobile'])}
                                        >
                                            <LinkNav linkKey={ContentKeyType.DEV} href={RouterLinks.DEV.link}>Разработал</LinkNav>
                                            <LinkNav linkKey={ContentKeyType.PHOTO} href={RouterLinks.PHOTO.link}>Наснимал</LinkNav>
                                            <LinkNav linkKey={ContentKeyType.POST} href={RouterLinks.POSTS.link}>Поделился</LinkNav>
                                            <WidgetMobile title={'Тема'}>
                                                <ThemeSwitcher />
                                            </WidgetMobile>
                                        </nav>
                                    </div>
                                </RemoveScroll>
                            </div>
                        </div>
                        {/* Правая колонка */}
                        <div
                            className={
                                classNames(
                                    gridColClasses,
                                    cls['column-nav'],
                                )
                            }
                        >
                            {
                                layoutMode === PageLayoutMode.FRONT
                                && data?.description
                                && (
                                    <Description
                                        text={data.description}
                                    />
                                )
                            }
                            {
                                layoutMode !== PageLayoutMode.FRONT
                                && (
                                    <Nav
                                        className={
                                            classNames(
                                                cls.nav,
                                                cls['nav--desktop'],
                                            )
                                        }
                                    />
                                )
                            }
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};
