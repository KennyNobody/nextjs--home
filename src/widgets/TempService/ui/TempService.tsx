import React from 'react';
import classNames from 'classnames';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { Container } from 'shared/ui/Container/Container';
import cls from './TempService.module.scss';

interface ToolbarProps {
    className?: string;
}

export const TempService = (props: ToolbarProps) => {
    const {
        className,
    } = props;

    return (
        <section className={classNames(cls.block, className)}>
            <Container>
                <ThemeSwitcher />
            </Container>
        </section>
    );
};
