import React from 'react';
import classNames from 'classnames';
import { Controls } from 'shared/ui/Controls/Controls';
import { IconKey } from 'shared/ui/IconSocial/IconSocial';
import { LinkSocial } from 'shared/ui/LinkSocial/LinkSocial';

interface SocialsProps {
    className?: string
}

export const Socials = (props: SocialsProps) => {
    const { className } = props;

    const linksArray = [
        {
            iconKey: IconKey.TG,
            href: 'https://t.me/Kenny_Nobody',
            label: 'написать в телеграм',
        },
        {
            iconKey: IconKey.INST,
            href: 'https://www.instagram.com/kenny_nobody/',
            label: 'перейти в instagram'
        },
        {
            iconKey: IconKey.VK,
            href: 'https://vk.com/kenny_nobody',
            label: 'перейти во вконтакте'
        },
        {
            iconKey: IconKey.GH,
            href: 'https://github.com/KennyNobody/',
            label: 'перейти в github'
        },
    ];

    return (
        <Controls className={classNames(className)}>
            {
                linksArray.map((item, index) => (
                    <LinkSocial
                        key={index}
                        href={item.href}
                        iconKey={item.iconKey}
                        aria-label={item.label}
                    />
                ))
            }
        </Controls>
    );
};
