import classNames from 'classnames';
import { ReactNode } from 'react';
import cls from './Controls.module.scss';

interface ControlsProps {
    className?: string;
    children: ReactNode;
}

export function Controls(props: ControlsProps) {
    const { className, children } = props;

    return (
        <div className={classNames(cls.block, className)}>
            { children }
        </div>
    );
}
