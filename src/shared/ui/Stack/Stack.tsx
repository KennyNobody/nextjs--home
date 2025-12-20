import { ReactNode } from 'react';
import classNames from 'classnames';
import cls from './Stack.module.scss';

enum StackSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
}

interface StackProps {
    size?: StackSize;
    className?: string;
    children: ReactNode;
}

const Stack = (props: StackProps) => {
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

export {
    Stack,
    StackSize,
}
