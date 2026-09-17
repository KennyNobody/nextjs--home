import React from 'react';
import classNames from 'classnames';
import { AppMainType } from 'entities/AppMain';
import { Container } from 'shared/ui/Container/Container';
import cls from './Footer.module.scss';

interface FooterProps {
    data: AppMainType;
    className?: string;
}

export function Footer(props: FooterProps) {
    const {
        data,
        className,
    } = props;

    return (
        <div className={classNames(cls.block, className)}>
            <Container>
                Подвал
            </Container>
        </div>
    );
}
