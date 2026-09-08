import {
    getMediaUrl,
    MediaFileType,
    getMediaPublicUrl,
} from 'entities/Media';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { AppTheme } from 'shared/types/Theme';
import { RouterLinks } from 'shared/config/routerConfig';
import FancyboxDecorator from 'shared/providers/FancyboxDecorator';
import { Skeleton, SkeletonMode } from 'shared/ui/Skeleton/Skeleton';
import cls from './Avatar.module.scss';

interface AvatarProps {
    isMain: boolean;
    className?: string;
    isLoading?: boolean;
    galleryKey?: string;
    themeProp?: AppTheme;
    picture: MediaFileType;
}

export const Avatar = (props: AvatarProps) => {
    const {
        isMain,
        picture,
        className,
        isLoading,
        galleryKey,
        themeProp,
    } = props;

    const pictureSmall = getMediaUrl(picture, 'small');
    const pictureLargePublic = getMediaPublicUrl(picture, 'large');

    const main = (
        <div
            className={
                classNames(
                    cls.block,
                    cls['block--main'],
                    themeProp && cls[`block--${themeProp}`],
                    className,
                )
            }
        >
            {
                isLoading
                && (
                    <Skeleton
                        mode={SkeletonMode.BLOCK}
                        className={classNames(cls.skeleton)}
                    />
                )
            }
            {
                !isLoading
                && pictureLargePublic.url
                && (
                    <FancyboxDecorator
                        className={classNames(cls.decorator)}
                    >
                        <Image
                            width={64}
                            height={64}
                            loading="lazy"
                            alt="аватар автора"
                            src={pictureSmall.url}
                            data-src={pictureLargePublic.url}
                            aria-label={'увеличить фотографию'}
                            data-fancybox={galleryKey || 'avatar-gallery'}
                        />
                    </FancyboxDecorator>
                )
            }

        </div>
    );

    const regular = (
        <Link
            href={RouterLinks.MAIN.link}
            aria-label={'На главную страницу'}
            className={
                classNames(
                    cls.block,
                    { [cls['block--main']]: isMain },
                    themeProp && cls[`block--${themeProp}`],
                    className,
                )
            }
        >
            {
                isLoading
                && (
                    <Skeleton
                        mode={SkeletonMode.BLOCK}
                        className={classNames(cls.skeleton)}
                    />
                )
            }
            {
                !isLoading
                && pictureLargePublic.url
                && (
                    <Image
                        width={64}
                        height={64}
                        loading="lazy"
                        alt="аватар автора"
                        src={pictureSmall.url}
                        data-src={pictureLargePublic.url}
                    />
                )
            }

        </Link>
    );

    return isMain ? main : regular;
};
