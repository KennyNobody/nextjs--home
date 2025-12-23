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
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const pathname = usePathname();

    useEffect(() => {
        // TODO: Решить или отключить правило
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsOpened(false);
    }, [pathname]);

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
                            classNames(
                                grid['grid__col-2'],
                                grid['grid__col-mob-4'],
                            )
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
                                isVisible={isOpened || false}
                                className={classNames(cls.overlay)}
                            />
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
                                        clickEvent={() => setIsOpened(!isOpened)}
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
                                    hidden={!isOpened}
                                    className={classNames(cls.nav)}
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
                                grid['grid__col-2'],
                                grid['grid__col-mob-4'],
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
