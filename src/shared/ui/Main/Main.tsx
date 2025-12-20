import { ReactNode } from 'react';
import classNames from 'classnames';
import cls from './Main.module.scss';

interface MainProps {
    children: ReactNode;
}

export const Main = (props: MainProps) => {
    const {
        children,
    } = props;

    return (
        <main className={classNames(cls.block)}>
            { children }
        </main>
    );
};
