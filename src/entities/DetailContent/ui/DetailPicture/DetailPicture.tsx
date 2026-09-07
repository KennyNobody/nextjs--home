import {
    getMediaUrl,
    MediaFileType,
} from 'entities/Media';
import Image from 'next/image';
import classNames from 'classnames';
import { DataLabels } from 'shared/labels/data';
import { EditorWrapper } from 'shared/ui/EditorWrapper/EditorWrapper';
import cls from './DetailPicture.module.scss';

interface DetailPictureProps {
    image: MediaFileType;
    galleryKey?: string;
}

export const DetailPicture = (props: DetailPictureProps) => {
    const { image, galleryKey } = props;

    const {
        url,
        alt,
        width,
        height,
    } = getMediaUrl(image, 'full');

    if (!url || !width || !height) {
        console.warn(`${DataLabels.IMAGE_NO_SIZE}: ${image.name}`);
        return null;
    }

    return (
        <figure className={classNames(cls.figure)}>
            <Image
                alt={alt}
                src={url}
                quality={90}
                width={width}
                sizes="1920px"
                loading="lazy"
                height={height}
                data-caption={image.caption || ''}
                data-fancybox={galleryKey || 'post-gallery'}
            />
            <figcaption className={classNames(cls.figcaption)}>
                <EditorWrapper>
                    {image.caption && (
                        <p className={classNames(cls.caption)}>{image.caption}</p>
                    )}
                </EditorWrapper>
            </figcaption>
        </figure>
    );
};