import Image from 'next/image';
import classNames from 'classnames';
import { MediaFileType } from 'entities/Media';
import { EditorWrapper } from 'shared/ui/EditorWrapper/EditorWrapper';
import cls from './DetailPicture.module.scss';

interface DetailPictureProps {
    image: MediaFileType;
    galleryKey?: string;
}

export const DetailPicture = (props: DetailPictureProps) => {
    const { image, galleryKey } = props;
    const imageUrl = image.url;
    const imageWidth = image.width;
    const imageHeight = image.height;

    if (!imageUrl || !imageWidth || !imageHeight) {
        console.warn('Сервер не передал размеры изображения:', image.name);
        return null;
    }

    return (
        <figure className={classNames(cls.figure)}>
            <Image
                quality={90}
                loading="lazy"
                sizes={'1920px'}
                width={imageWidth}
                src={`${imageUrl}`}
                height={imageHeight}
                alt={image.alternativeText || ''}
                data-caption={image.caption || ''}
                data-fancybox={galleryKey || 'post-gallery'}
                style={{
                    aspectRatio: `${imageWidth} / ${imageHeight}`
                }}
            />
            <figcaption className={classNames(cls.figcaption)}>
                <EditorWrapper>
                    {image?.caption
                        && <p className={classNames(cls.caption)}>{image.caption}</p>}
                </EditorWrapper>
            </figcaption>
        </figure>
    );
};
