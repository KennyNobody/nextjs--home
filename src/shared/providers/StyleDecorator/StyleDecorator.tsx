import { ReactNode } from 'react';
import classNames from 'classnames';
import cls from './StyleDecorator.module.scss';

interface StyleDecoratorProps {
    className?: string;
    children: ReactNode;
}

export const StyleDecorator = (props: StyleDecoratorProps) => {
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
