'use client';

import classNames from 'classnames';
import cls from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={classNames(cls.block)}>
            Подвал
        </footer>
    );
};
