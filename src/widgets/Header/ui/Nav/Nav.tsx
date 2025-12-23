import React from 'react';
import classNames from 'classnames';
import { LinkNav } from 'shared/ui/LinkNav/LinkNav';
import { ContentKeyType } from 'shared/types/CommonTypes';
import { RouterLinks } from 'shared/config/routerConfig';
import cls from './Nav.module.scss';

interface NavProps {
    className?: string;
    isLoading?: boolean;
}

export const Nav = (props: NavProps) => {
    const {
        isLoading,
        className,
    } = props;

    return (
        <nav className={classNames(cls.block, className)}>
            <LinkNav
                isLoading={isLoading}
                href={RouterLinks.DEV.link}
                linkKey={ContentKeyType.DEV}
            >
                Разработка
            </LinkNav>
            <LinkNav
                isLoading={isLoading}
                href={RouterLinks.PHOTO.link}
                linkKey={ContentKeyType.PHOTO}
            >
                Фото-проекты
            </LinkNav>
            <LinkNav
                isLoading={isLoading}
                href={RouterLinks.POSTS.link}
                linkKey={ContentKeyType.POST}
            >
                Заметки
            </LinkNav>
        </nav>
    );
};
