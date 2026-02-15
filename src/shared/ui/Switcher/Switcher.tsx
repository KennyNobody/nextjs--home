import classNames from 'classnames';
import { ChangeEvent } from 'react';
import cls from './Switcher.module.scss';
import { AppTheme } from '../../types/Theme';

interface SwitcherProps {
    label: string;
    className?: string;
    isChecked: boolean;
    themeProp?: AppTheme;
    changeEvent: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Switcher = (props: SwitcherProps) => {
    const {
        label,
        className,
        isChecked,
        themeProp,
        changeEvent,
    } = props;

    return (
        <label className={classNames(cls.label, className)}>
            {
                label
                && (
                    <span className={classNames(cls.title)}>
                        { label }
                    </span>
                )
            }
            <input
                type="checkbox"
                checked={isChecked}
                onChange={changeEvent}
                className={classNames(cls.input)}
            />
            <span
                className={
                    classNames(
                        cls.wrapper,
                        themeProp && cls[`wrapper--${themeProp}`],
                    )
                }
            >
                <span
                    className={
                        classNames(
                            cls.button,
                            { [cls['button--fixed']]: true },
                        )
                    }
                />
            </span>
        </label>
    );
};
