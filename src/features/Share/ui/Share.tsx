import {
    VKShareButton,
    TwitterShareButton,
    FacebookShareButton,
    TelegramShareButton,
} from 'react-share';
import React from 'react';
import classNames from 'classnames';
import {
    IconKey,
    IconSocial,
} from 'shared/ui/IconSocial/IconSocial';
import { AppTheme } from 'shared/types/Theme';
import { Controls } from 'shared/ui/Controls/Controls';
import cls from './Share.module.scss';

interface ShareProps {
    className?: string;
    theme?: AppTheme;
}

export const Share = (props: ShareProps) => {
    const {
        theme,
        className,
    } = props;

    // TODO: Сделать мобильную версию
    const buttonClasses = classNames(
        cls.button,
        theme && cls[`button--${theme}`],
    );

    const iconClasses = classNames(
        cls.icon,
        theme && cls[`icon--${theme}`],
    );

    return (
        <div className={classNames(cls.block, className)}>
            <span className={classNames(cls.title)}>
                Поделиться
            </span>
            <Controls className={classNames(cls.controls)}>
                <VKShareButton
                    url="vk.com"
                    resetButtonStyle={false}
                    className={buttonClasses}
                    aria-label={'Поделиться во вконтакте'}
                >
                    <IconSocial
                        iconKey={IconKey.VK}
                        className={iconClasses}
                    />
                </VKShareButton>
                <TwitterShareButton
                    url="twitter.com"
                    resetButtonStyle={false}
                    className={buttonClasses}
                    aria-label={'Поделиться в твиттер'}
                >
                    <IconSocial
                        iconKey={IconKey.X}
                        className={iconClasses}
                    />
                </TwitterShareButton>
                <FacebookShareButton
                    url="fb.com"
                    resetButtonStyle={false}
                    className={buttonClasses}
                    aria-label={'Поделиться в facebook'}
                >
                    <IconSocial
                        iconKey={IconKey.FB}
                        className={iconClasses}
                    />
                </FacebookShareButton>
                <TelegramShareButton
                    url="tg.com"
                    resetButtonStyle={false}
                    className={buttonClasses}
                    aria-label={'Поделиться в telegram'}
                >
                    <IconSocial
                        iconKey={IconKey.TG}
                        className={iconClasses}
                    />
                </TelegramShareButton>
            </Controls>
        </div>
    );
};
