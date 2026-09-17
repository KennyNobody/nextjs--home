import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
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
            <Link href={RouterLinks.MAIN.link}>
                Главная
            </Link>
            <Link href={RouterLinks.POSTS.link}>
                Список
            </Link>
            {/*<LinkNav*/}
            {/*    isLoading={isLoading}*/}
            {/*    href={RouterLinks.POSTS.link}*/}
            {/*    // linkKey={ContentKeyType.POST}*/}
            {/*    // isActive={contentKey === ContentKeyType.POST}*/}
            {/*>*/}
            {/*    Заметки*/}
            {/*</LinkNav>*/}
        </nav>
    );
};
