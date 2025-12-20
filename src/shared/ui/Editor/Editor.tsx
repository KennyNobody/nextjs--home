import React from 'react';
import classNames from 'classnames';
import cls from './Editor.module.scss';

interface EditorProps {
    content: string;
    className?: string;
}

export const Editor = (props: EditorProps) => {
    const {
        content,
        className,
    } = props;

    return (
        <div
            className={classNames(cls.block, className)}
            dangerouslySetInnerHTML={{
                __html: content,
            }}
        />
    );
};
