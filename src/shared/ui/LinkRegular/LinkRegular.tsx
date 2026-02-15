import Link from 'next/link';
import classNames from 'classnames';
import { LinkHTMLAttributes } from 'react';
import cls from './LinkRegular.module.scss';

interface LinkRegularProps extends LinkHTMLAttributes<HTMLAnchorElement> {
    className?: string;
    href: string;
    text: string;
}

export const LinkRegular = (props: LinkRegularProps) => {
    const {
        href,
        text,
        className,
        ...otherProps
    } = props;

    return (
        <Link
            href={href}
            {...otherProps}
            className={classNames(
                cls.block,
                className,
            )}
        >
            { text }
        </Link>
    );
};
