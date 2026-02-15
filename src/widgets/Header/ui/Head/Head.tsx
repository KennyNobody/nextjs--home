import classNames from 'classnames';
import { ReactNode } from 'react';
import { AppTheme } from 'shared/types/Theme';
import cls from './Head.module.scss';

interface HeadProps {
    isMain: boolean;
    className?: string;
    children: ReactNode;
    themeProp?: AppTheme;
}

export const Head = (props: HeadProps) => {
    const {
        isMain,
        children,
        className,
        themeProp,
    } = props;

    return (
        <div
            className={
                classNames(
                    cls.block,
                    themeProp && cls[`block--${themeProp}`],
                    { [cls['block--regular']]: !isMain },
                    className,
                )
            }
        >
            { children }
        </div>
    );
};
