import classNames from 'classnames';
import React, { LinkHTMLAttributes } from 'react';
import cls from './LinkSocial.module.scss';
import { AppTheme } from '../../types/Theme';
import { IconKey, IconSocial } from '../IconSocial/IconSocial';

interface LinkSocialProps extends LinkHTMLAttributes<HTMLAnchorElement> {
    className?: string;
    iconKey: IconKey;
    themeProp?: AppTheme;
}

export const LinkSocial = (props: LinkSocialProps) => {
    const {
        iconKey,
        className,
        themeProp,
        ...otherProps
    } = props;

    return (
        <a
            {...otherProps}
            target="_blank"
            rel="noopener noreferrer"
            className={
                classNames(
                    cls.link,
                    themeProp && cls[`link--${themeProp}`],
                    className
                )
            }
        >
            <IconSocial
                iconKey={iconKey}
                className={classNames(cls.icon)}
            />
        </a>
    );
};
