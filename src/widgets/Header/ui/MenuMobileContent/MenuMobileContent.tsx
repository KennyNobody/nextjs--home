'use client'

import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LinkNav } from 'shared/ui/LinkNav/LinkNav';
import { Overlay } from 'shared/ui/Overlay/Overlay';
import { ContentKeyType } from 'shared/types/CommonTypes';
import { WidgetMobile } from 'shared/ui/WidgetMobile/WidgetMobile';
import cls from './MenuMobileContent.module.scss';
import { RouterLinks } from 'shared/config/routerConfig';
import { t } from 'i18next';

interface MenuMobileContentProps {
    isOpen: boolean;
    className?: string;
    children: ReactNode;
}

export const MenuMobileContent = (props: MenuMobileContentProps) => {
    const {
        isOpen,
        children,
        className,
    } = props;

    return (
        <div
            className={
                classNames(
                    cls.block,
                    className,
                )
            }
        >
            <Overlay
                isVisible={isOpen || false}
                className={classNames(cls.overlay)}
            />
            <div className={classNames(cls.wrapper)}>
                { children }
            </div>
            <nav
                hidden={!isOpen}
                className={classNames(cls.nav)}
            >
                <LinkNav linkKey={ContentKeyType.DEV} href={RouterLinks.DEV.link}>Разработка</LinkNav>
                <LinkNav linkKey={ContentKeyType.PHOTO} href={RouterLinks.PHOTO.link}>Фото-проекты</LinkNav>
                <LinkNav linkKey={ContentKeyType.POST} href={RouterLinks.POSTS.link}>Заметки</LinkNav>
                {/*    /!* TODO: Раскомментировать, когда будет голова английская версия *!/*/}
                <WidgetMobile
                    title={t('language')}
                >
                    123
                    {/*    /!*     <LanguageSwitcher *!/*/}
                    {/*    /!*         className={ *!/*/}
                    {/*    /!*             classNames( *!/*/}
                    {/*    /!*                 cls.switcher, *!/*/}
                    {/*    /!*             ) *!/*/}
                    {/*    /!*         } *!/*/}
                    {/*    /!*     /> *!/*/}
                </WidgetMobile>
                <WidgetMobile
                    title={t('theme')}
                >
                    <ThemeSwitcher />
                </WidgetMobile>
            </nav>
        </div>
    );
};
