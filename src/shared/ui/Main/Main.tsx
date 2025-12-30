import { ReactNode } from 'react';
import classNames from 'classnames';
import cls from './Main.module.scss';;
import { getLayoutMode } from 'shared/helpers/getLayoutMode';

interface MainProps {
    className?: string;
    children: ReactNode;
}

export const Main = async (props: MainProps) => {
    const {
        children,
        className,
    } = props;

    const layoutMode = await getLayoutMode();

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
