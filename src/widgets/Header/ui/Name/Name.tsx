import { JSX } from 'react';
import classNames from 'classnames';
import { Skeleton, SkeletonMode } from 'shared/ui/Skeleton/Skeleton';
import cls from './Name.module.scss';

interface NameProps {
    isMain: boolean;
    className?: string;
    isLoading?: boolean;
    name?: string | null;
    nickname?: string | null;
}

export const Name = (props: NameProps) => {
    const {
        name,
        isMain,
        isLoading,
        nickname,
        className,
    } = props;

    const Tag: keyof JSX.IntrinsicElements = isMain ? 'h1' : 'p';

    if (isLoading) {
        return (
            <Skeleton
                mode={SkeletonMode.BLOCK}
                className={classNames(cls.skeleton, className)}
            />
        );
    }

    return (
        <Tag
            className={
                classNames(
                    cls.name,
                    { [cls['name--main']]: isMain },
                    className,
                )
            }
        >
            { name || '...' }
            {
                nickname
                && (
                    <span className={cls.nickname}>{` / ${nickname}`}</span>
                )
            }
        </Tag>
    );
};
