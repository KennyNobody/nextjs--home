import { ReactNode } from 'react';
import classNames from 'classnames';
import cls from './WidgetMobile.module.scss';

interface WidgetMobileProps {
    title: string;
    className?: string;
    children: ReactNode;
}

export const WidgetMobile = (props: WidgetMobileProps) => {
    const {
        title,
        children,
        className,
    } = props;

    return (
        <label
            className={
                classNames(
                    cls.block,
                    className,
                )
            }
        >
            <span className={classNames(cls.title)}>{ title }</span>
            { children }
        </label>
    );
};
