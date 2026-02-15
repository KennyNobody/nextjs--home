import { ReactNode } from 'react';
import classNames from 'classnames';
import cls from './ListTags.module.scss';

interface ListTagsProps {
    children: ReactNode;
    className?: string;
}

export const ListTags = (props: ListTagsProps) => {
    const {
        children,
        className,
    } = props;

    return (
        <div className={classNames(cls.block, className)}>
            { children }
        </div>
    );
};
