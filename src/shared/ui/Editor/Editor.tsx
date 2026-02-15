import { ReactNode } from 'react';
import classNames from 'classnames';
import cls from './Editor.module.scss';
import { AppTheme } from '../../types/Theme';

interface EditorProps {
    data?: string;
    theme?: AppTheme;
    className?: string;
    children?: ReactNode;
}

export const Editor = (props: EditorProps) => {
    const {
        data,
        theme,
        children,
        className,
    } = props;

    const classes = classNames(
        cls.editor,
        theme && cls[`editor--${theme}`],
        className,
    );

    if (data) {
        return (
            <div
                className={classes}
                dangerouslySetInnerHTML={{
                    __html: data,
                }}
            />
        );
    }

    return (
        <div className={classes}>
            { children }
        </div>
    );
};
