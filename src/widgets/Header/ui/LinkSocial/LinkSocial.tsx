import classNames from 'classnames';
import { AppTheme } from 'shared/types/Theme';
import React, { LinkHTMLAttributes } from 'react';
import { IconKey, IconSocial } from 'shared/ui/IconSocial/IconSocial';
import cls from './LinkSocial.module.scss';

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
                    className,
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
