import { ReactNode } from 'react';
import classNames from 'classnames';
import cls from './StorybookDecorator.module.scss';

interface ContainerStoryProps {
    className?: string;
    children?: ReactNode;
    mode: 'size-small' | 'size-medium' | 'size-large' | 'size-full' | 'padding-small';
}

export const StorybookDecorator = (props: ContainerStoryProps) => {
    const {
        mode,
        children,
        className,
    } = props;

    return (
        <div
            className={
                classNames(
                    cls.block,
                    cls[`block--${mode}`],
                    className,
                )
            }
        >
            { children }
        </div>
    );
};
