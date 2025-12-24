import { ReactNode } from 'react';
import classNames from 'classnames';
import cls from './Stack.module.scss';

export enum StackSizeType {
    LARGE = 'large',
    MIDDLE = 'middle',
}

interface StackProps {
    className?: string;
    children: ReactNode;
    size: StackSizeType;
}

export const Stack = (props: StackProps) => {
    const {
        size,
        children,
        className,
    } = props;

    return (
        <div
            className={
                classNames(
                    cls.block,
                    cls[`block--${size}`],
                    className,
                )
            }
        >
            { children }
        </div>
    );
};
