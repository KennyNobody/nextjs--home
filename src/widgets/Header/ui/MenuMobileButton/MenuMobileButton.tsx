import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';
import Icon from 'shared/assets/icons/menu.svg';
import cls from './MenuMobileButton.module.scss';

interface MenuMobileButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    onClick: () => void;
}

export const MenuMobileButton = (props: MenuMobileButtonProps) => {
    const {
        onClick,
        className,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            onClick={onClick}
            className={classNames(cls.block, className)}
            { ...otherProps }
        >
            <Icon
                className={
                    classNames(
                        cls.icon,
                    )
                }
            />
        </button>
    );
};
