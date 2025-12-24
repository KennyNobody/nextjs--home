import { ReactNode } from 'react';
import classNames from 'classnames';
import cls from './Main.module.scss';
import useLayoutMode from '../../hooks/useLayoutMode';

interface MainProps {
    className?: string;
    children: ReactNode;
}

export const Main = (props: MainProps) => {
    const {
        children,
        className,
    } = props;

    const layoutMode = useLayoutMode();

    return (
        <main
            className={
                classNames(
                    cls.block,
                    cls[`block--${layoutMode}`],
                    className,
                )
            }
        >
            { children }
        </main>
    );
};
