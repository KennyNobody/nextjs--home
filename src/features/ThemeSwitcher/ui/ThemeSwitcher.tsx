'use client'

import { ChangeEvent } from 'react';
import classNames from 'classnames';
import { useTheme } from 'next-themes';
import { Switcher } from 'shared/ui/Switcher/Switcher';
import { useMounted } from 'shared/hooks/useMounted';
import cls from './ThemeSwitcher.module.scss';
import { AppTheme } from 'shared/types/Theme';

interface ThemeSwitcherProps {
    className?: string
}

export function ThemeSwitcher(props: ThemeSwitcherProps) {
    const { className } = props;
    const { resolvedTheme, setTheme } = useTheme();
    const mounted = useMounted();

    const changeTheme = (e: ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        setTheme(isChecked ? AppTheme.DARK : AppTheme.LIGHT);
    };

    if (!mounted) {
        return null;
    }

    return (
        <Switcher
            changeEvent={changeTheme}
            isChecked={resolvedTheme === AppTheme.DARK}
            label={'Переключить цветовую схему'}
            className={classNames(cls.toggler, className)}
        />
    );
}
