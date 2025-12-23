'use client'

import { ChangeEvent } from 'react';
import classNames from 'classnames';
import { useTheme } from 'next-themes';
import { Switcher } from 'shared/ui/Switcher/Switcher';
import cls from './ThemeSwitcher.module.scss';
import { AppTheme } from 'shared/types/Theme';

interface ThemeSwitcherProps {
    className?: string
}

export function ThemeSwitcher(props: ThemeSwitcherProps) {
    const { className } = props;
    const { theme, setTheme } = useTheme();
    const changeTheme = (e: ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        setTheme(isChecked ? AppTheme.DARK : AppTheme.LIGHT);
    };

    return (
        <Switcher
            changeEvent={changeTheme}
            isChecked={theme === AppTheme.DARK}
            className={classNames(cls.toggler, className)}
        />
    );
}
