import classNames from 'classnames';
import cls from './End.module.scss';
import { AppTheme } from 'shared/types/Theme';

interface EndProps {
    className?: string;
    themeProp?: AppTheme;
}

export const End = (props: EndProps) => {
    const {
        themeProp,
        className,
    } = props;

    return (
        <p
            className={
                classNames(
                    cls.block,
                    themeProp && cls[`block--${themeProp}`],
                    className,
                )
            }
        >
            Дальше ничего нет
        </p>
    );
};
