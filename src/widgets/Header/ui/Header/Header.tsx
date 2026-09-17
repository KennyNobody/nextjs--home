'use client'

import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import grid from 'shared/styles/grid.module.scss';
import React, { useEffect, useState } from 'react';
import { Overlay } from 'shared/ui/Overlay/Overlay';
import useRouteConfig from 'shared/hooks/useLayoutMode';
import { Container } from 'shared/ui/Container/Container';
import { AppMainType } from 'entities/AppMain/model/types/AppMain';
import { Nav } from '../Nav/Nav';
import cls from './Header.module.scss';

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
                    <Nav
                        className={
                            classNames(
                                cls.nav,
                                cls['nav--desktop'],
                            )
                        }
                    />
                </Container>
            </div>
        </>
    );
};
