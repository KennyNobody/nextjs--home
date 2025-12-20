import { ReactNode } from 'react';
import classNames from "classnames";
import cls from './PageWrapper.module.scss';

interface PageWrapperProps {
    children: ReactNode;
}

export const PageWrapper = (props: PageWrapperProps) => {
    const { children } = props;

    return (
        <div className={classNames(cls.block)}>
            { children }
        </div>
    );
};
