import classNames from 'classnames';
import { JSX, ReactNode } from 'react';
import cls from './Title.module.scss';

export enum TitleModeType {
    MAIN,
    REGULAR,
}

interface TitleProps {
    className?: string;
    mode: TitleModeType;
    children: ReactNode;
}

export const Title = (props: TitleProps) => {
    const { className, mode, children } = props;

    const Tag: keyof JSX.IntrinsicElements = mode === TitleModeType.MAIN ? 'h1' : 'h2';

    return (
        <Tag
            className={
                classNames(
                    cls.block,
                    className,
                )
            }
        >
            { children }
        </Tag>
    );
};
