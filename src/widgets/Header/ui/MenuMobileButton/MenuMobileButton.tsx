import classNames from 'classnames';
import Icon from 'shared/assets/icons/menu.svg';
import cls from './MenuMobileButton.module.scss';

interface MenuMobileButtonProps {
    className?: string;
    onClick: () => void;
}

export const MenuMobileButton = (props: MenuMobileButtonProps) => {
    const {
        onClick,
        className,
    } = props;

    return (
        <button
            type="button"
            onClick={onClick}
            className={classNames(cls.block, className)}
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
