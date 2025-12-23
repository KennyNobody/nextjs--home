import classNames from 'classnames';
import Icon from 'shared/assets/icons/menu.svg';
import cls from './MenuMobileButton.module.scss';

interface MenuMobileButtonProps {
    className?: string;
    clickEvent: () => void;
}

export const MenuMobileButton = (props: MenuMobileButtonProps) => {
    const {
        className,
        clickEvent,
    } = props;

    return (
        <button
            type="button"
            onClick={clickEvent}
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
