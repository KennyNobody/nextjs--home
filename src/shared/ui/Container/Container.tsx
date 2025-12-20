import { ReactNode } from 'react';
import classNames from 'classnames';
import cls from './Container.module.scss';

interface ContainerProps {
    className?: string;
    children: ReactNode;
}

export const Container = (props: ContainerProps) => {
    const {
        children,
        className,
    } = props;

    return (
        <div className={classNames(cls.block, className)}>
            { children }
        </div>
    );
};
