'use client';

import classNames from 'classnames';
import cls from './Header.module.scss';
import Link from "next/link";
import {RouterEndpoints} from "shared/router/routerEndpoints";


export const Header = () => {
    return (
        <header className={classNames(cls.block)}>
            <Link href={RouterEndpoints.MAIN}>
                Главная
            </Link>
            <Link href={RouterEndpoints.CASES_LIST}>
                Записи
            </Link>
        </header>
    );
};
