import { ReactNode } from 'react';
import classNames from 'classnames';
import Link, { LinkProps } from 'next/link';
import { ContentKeyType } from 'shared/types/CommonTypes';
import { Skeleton, SkeletonMode } from 'shared/ui/Skeleton/Skeleton';
import cls from './LinkNav.module.scss';
import { AppTheme } from '../../types/Theme';

interface LinkAppProps extends LinkProps {
    className?: string;
    isActive?: boolean;
    children: ReactNode;
    themeProp?: AppTheme;
    isLoading?: boolean;
    linkKey: ContentKeyType;
}

export const LinkNav = (props: LinkAppProps) => {
    const {
        linkKey,
        children,
        isActive,
        themeProp,
        className,
        isLoading,
        ...otherProps
    } = props;

    const skeleton = (
        <Skeleton
            mode={SkeletonMode.BLOCK}
            className={
                classNames(
                    cls.block,
                    // cls['block--skeleton'],
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
                    isActive && cls['block--active'],
                    className,
                ])
            }
        >
            { children }
        </Link>
    );

    return isLoading ? skeleton : content;
};
