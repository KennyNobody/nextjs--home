import classNames from 'classnames';
import cls from './Skeleton.module.scss';
import { AppTheme } from '../../types/Theme';

export enum SkeletonMode {
    BLOCK,
    LINES,
}

interface SkeletonProps {
    strings?: number;
    className?: string;
    mode: SkeletonMode;
    themeProp?: AppTheme;
}

export const Skeleton = (props: SkeletonProps) => {
    const {
        mode,
        strings = 5,
        className,
        themeProp,
    } = props;

    if (mode === SkeletonMode.BLOCK) {
        return (
            <div
                className={
                    classNames(
                        cls.block,
                        themeProp && cls[`block--${themeProp}`],
                        className,
                    )
                }
            />
        );
    }

    return (
        <div className={classNames(cls.lines, className)}>
            {
                new Array(strings).fill(null).map((_, index) => (
                    <span
                        key={index}
                        className={
                            classNames(
                                cls.wrapper,
                            )
                        }
                    >
                        &nbsp;
                        <span
                            className={
                                classNames(
                                    cls.inner,
                                    themeProp && cls[`inner--${themeProp}`],
                                )
                            }
                        />
                    </span>
                ))
            }
        </div>
    );
};
