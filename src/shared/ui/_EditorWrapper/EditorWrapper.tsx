import { ReactNode } from 'react';
import classNames from 'classnames';
import cls from './EditorWrapper.module.scss';

interface EditorWrapperProps {
    children: ReactNode;
}

export const EditorWrapper = (props: EditorWrapperProps) => {
    const { children } = props;

    return (
        <div className={classNames(cls.block)}>
            { children }
        </div>
    );
};
