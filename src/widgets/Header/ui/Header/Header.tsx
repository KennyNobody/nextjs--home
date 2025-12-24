'use client';

import { t } from 'i18next';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import grid from 'shared/styles/grid.module.scss';
import React, { useEffect, useState } from 'react';
import { Overlay } from 'shared/ui/Overlay/Overlay';
import { LinkNav } from 'shared/ui/LinkNav/LinkNav';
import useLayoutMode from 'shared/hooks/useLayoutMode';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
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

interface HeaderProps {
    data: AppMainType;
    className?: string;
}


export const Header = (props: HeaderProps) => {
    const {
        data,
        className,
    } = props;

    const layoutMode = useLayoutMode();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const pathname = usePathname();

    useEffect(() => {
        // TODO: Решить или отключить правило
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsOpen(false);
    }, [pathname]);

    const isFrontLayout = layoutMode === PageLayoutMode.FRONT;
    const gridColClasses = classNames(grid['grid__col-2'], grid['grid__col-mob-4']);

    return (
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
                            <Overlay
                                isVisible={isOpen}
                                className={classNames(cls.overlay)}
                            />
                            <div className={classNames(cls.wrapper)}>
                                <Head
                                    isMain={isFrontLayout}
                                >
                                    <Avatar
                                        isMain={isFrontLayout}
                                        className={classNames(cls.avatar)}
                                        url={data?.preview?.data?.formats?.small?.url}
                                    />
                                    <Name
                                        name={data?.name}
                                        nickname={data?.nickname}
                                        isMain={isFrontLayout}
                                        className={
                                            classNames(
                                                cls.name,
                                                { [cls['name--front']]: !isFrontLayout },
                                            )
                                        }
                                    />
                                    <MenuMobileButton
                                        className={classNames(cls.button)}
                                        onClick={() => setIsOpen(prev => !prev)}
                                    />
                                    {/* TODO: Раскомментировать, когда будет голова английская версия */}
                                    {/* { */}
                                    {/*     data */}
                                    {/*     && !isLoading */}
                                    {/*     && ( */}
                                    {/*         <LanguageSwitcher */}
                                    {/*             className={ */}
                                    {/*                 classNames( */}
                                    {/*                     cls.switcher, */}
                                    {/*                 ) */}
                                    {/*             } */}
                                    {/*         /> */}
                                    {/*     ) */}
                                    {/* } */}
                                    {/*{*/}
                                    {/*    !isLoading*/}
                                    {/*    && (*/}

                                </Head>
                            </div>
                            <div className={classNames(cls.relative)}>
                                <nav
                                    hidden={!isOpen}
                                    className={classNames(cls.nav, cls['nav--mobile'])}
                                >
                                    <LinkNav linkKey={ContentKeyType.DEV} href={RouterLinks.DEV.link}>Разработка</LinkNav>
                                    <LinkNav linkKey={ContentKeyType.PHOTO} href={RouterLinks.PHOTO.link}>Фото-проекты</LinkNav>
                                    <LinkNav linkKey={ContentKeyType.POST} href={RouterLinks.POSTS.link}>Заметки</LinkNav>
                                    {/*    /!* TODO: Раскомментировать, когда будет голова английская версия *!/*/}
                                    {/*<WidgetMobile*/}
                                    {/*    title={t('language')}*/}
                                    {/*>*/}
                                    {/*    Переключатель языка*/}
                                    {/*    /!*     <LanguageSwitcher *!/*/}
                                    {/*    /!*         className={ *!/*/}
                                    {/*    /!*             classNames( *!/*/}
                                    {/*    /!*                 cls.switcher, *!/*/}
                                    {/*    /!*             ) *!/*/}
                                    {/*    /!*         } *!/*/}
                                    {/*    /!*     /> *!/*/}
                                    {/*</WidgetMobile>*/}
                                    <WidgetMobile
                                        title={t('theme')}
                                    >
                                        <ThemeSwitcher />
                                    </WidgetMobile>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div
                        className={
                            classNames(
                                gridColClasses,
                                cls['column-nav'],
                            )
                        }
                    >
                        {
                            isFrontLayout
                            && data?.description
                            && (
                                <Description
                                    text={data.description}
                                />
                            )
                        }
                        {
                            isFrontLayout
                            && (
                                <Nav
                                    // isLoading={isLoading}
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
    );
};
