import { ReactNode } from 'react';
import classNames from 'classnames';
import cls from './Fieldset.module.scss';

interface FieldsetProps {
    title: string;
    className?: string;
    children: ReactNode;
}

export const Fieldset = (props: FieldsetProps) => {
    const {
        title,
        children,
        className,
    } = props;

    return (
        <fieldset className={classNames(cls.block, className)}>
            <legend className={classNames(cls.title)}>
                { title }
            </legend>
            { children }
        </fieldset>
    );
};
