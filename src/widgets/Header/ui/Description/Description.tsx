import classNames from 'classnames';
import cls from './Description.module.scss';
import { Skeleton, SkeletonMode } from 'shared/ui/Skeleton/Skeleton';

interface DescriptionProps {
    text?: string;
    isLoading?: boolean;
    className?: string;
}

export const Description = (props: DescriptionProps) => {
    const {
        text,
        className,
        isLoading,
    } = props;

    const content = (
        <p>{ text }</p>
    );

    const skeleton = (
        <Skeleton
            strings={3}
            mode={SkeletonMode.LINES}
        />
    );

    return (
        <div className={classNames(cls.block, className)}>
            { isLoading ? skeleton : content }
        </div>
    );
};
