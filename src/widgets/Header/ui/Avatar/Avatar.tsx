import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import {getMediaUrl, MediaFileType} from "entities/Media";
import { AppTheme } from 'shared/types/Theme';
import { _BASE_URL_ } from 'shared/config/envConfig';
import { RouterLinks } from 'shared/config/routerConfig';
import FancyboxDecorator from 'shared/providers/FancyboxDecorator';
import { Skeleton, SkeletonMode } from 'shared/ui/Skeleton/Skeleton';
import cls from './Avatar.module.scss';
import {getAbsoluteUrl} from "../../../../shared/helpers/getAbsoluteUrl";

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
    const pictureLarge = getMediaUrl(picture, 'large');

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
                && pictureSmall.url
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
                            data-src={pictureLarge.url}
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
                && pictureLarge.url
                && (
                    <Image
                        width={64}
                        height={64}
                        loading="lazy"
                        alt="аватар автора"
                        src={pictureSmall.url}
                        data-src={pictureLarge.url}
                    />
                )
            }

        </Link>
    );

    return isMain ? main : regular;
};
