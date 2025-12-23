import classNames from 'classnames';
import Link, { LinkProps } from 'next/link';
import { ReactNode, useState, } from 'react';
import { ContentKeyType } from 'shared/types/CommonTypes';
import { Skeleton, SkeletonMode } from 'shared/ui/Skeleton/Skeleton';
import cls from './LinkNav.module.scss';
import { AppTheme } from '../../types/Theme';

interface LinkAppProps extends LinkProps {
    className?: string;
    children: ReactNode;
    themeProp?: AppTheme;
    isLoading?: boolean;
    linkKey: ContentKeyType;
}

export const LinkNav = (props: LinkAppProps) => {
    const {
        linkKey,
        children,
        themeProp,
        className,
        isLoading,
        ...otherProps
    } = props;

    const [isActive, setIsActive] = useState<boolean>(false);

    const skeleton = (
        <Skeleton
            mode={SkeletonMode.BLOCK}
            className={
                classNames(
                    cls.skeleton,
                    cls.block,
                    themeProp && cls[`block--${themeProp}`],
                    className,
                )
            }
        />
    );

    const content = (
        <Link
            {...otherProps}
            className={
                classNames([
                    cls.block,
                    themeProp && cls[`block--${themeProp}`],
                    isActive && [cls['block--active']],
                    className,
                ])
            }
        >
            { children }
        </Link>
    );

    return isLoading ? skeleton : content;
};
