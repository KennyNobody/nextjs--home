import { ReactNode } from 'react';
import classNames from 'classnames';
import cls from './Toolbar.module.scss';

interface ToolbarProps {
    className?: string;
    children: ReactNode;
}

export const Toolbar = (props: ToolbarProps) => {
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
