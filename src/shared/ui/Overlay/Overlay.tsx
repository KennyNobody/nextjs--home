import classNames from 'classnames';
import cls from './Overlay.module.scss';
import { AppTheme } from '../../types/Theme';

interface OverlayProps {
    isVisible: boolean;
    className?: string;
    themeProp?: AppTheme;
}

export const Overlay = (props: OverlayProps) => {
    const {
        isVisible,
        themeProp,
        className,
    } = props;

    return (
        <div
            hidden={!isVisible}
            className={
                classNames(
                    cls.block,
                    themeProp && cls[`block--${themeProp}`],
                    className,
                )
            }
        />
    );
};
