import React from 'react';
import classNames from 'classnames';
import { LinkNav } from 'shared/ui/LinkNav/LinkNav';
import useRouteConfig from 'shared/hooks/useLayoutMode';
import { RouterLinks } from 'shared/config/routerConfig';
import { ContentKeyType } from 'shared/types/CommonTypes';
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

    const { contentKey } = useRouteConfig();
    console.log(contentKey);

    return (
        <nav className={classNames(cls.block, className)}>
            <LinkNav
                isLoading={isLoading}
                href={RouterLinks.DEV.link}
                linkKey={ContentKeyType.DEV}
                isActive={contentKey === ContentKeyType.DEV}
            >
                Разработка
            </LinkNav>
            <LinkNav
                isLoading={isLoading}
                href={RouterLinks.PHOTO.link}
                linkKey={ContentKeyType.PHOTO}
                isActive={contentKey === ContentKeyType.PHOTO}
            >
                Фото-проекты
            </LinkNav>
            <LinkNav
                isLoading={isLoading}
                href={RouterLinks.POSTS.link}
                linkKey={ContentKeyType.POST}
                isActive={contentKey === ContentKeyType.POST}
            >
                Заметки
            </LinkNav>
        </nav>
    );
};
