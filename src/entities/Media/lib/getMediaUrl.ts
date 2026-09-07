import { _MEDIA_URL_ } from 'shared/config/envConfig';
import { MediaFileType } from '../model/types/Media';

type ImageFormatType = 'full' | 'thumbnail' | 'small' | 'medium' | 'large';

interface MediaResult {
    url: string;
    alt: string;
    width: number;
    height: number;
}

const FORMAT_PRIORITY: Array<'thumbnail' | 'small' | 'medium' | 'large'> = [
    'large',
    'medium',
    'small',
    'thumbnail',
];

const getMediaUrl = (
    media: MediaFileType | undefined,
    format: ImageFormatType,
): MediaResult => {

    if (!media) {
        return { url: '', alt: '', width: 0, height: 0 };
    }

    if (format === 'full') {
        return {
            url: media.url ? `${_MEDIA_URL_}${media.url}` : '',
            alt: media.alternativeText || '',
            width: media.width ?? 0,
            height: media.height ?? 0,
        };
    }

    const startIndex: number = FORMAT_PRIORITY.indexOf(format);
    const formatsToCheck = FORMAT_PRIORITY.slice(startIndex);

    const availableFormat = formatsToCheck.find(f => media.formats?.[f]?.url);
    const selectedFormat = availableFormat ? media.formats?.[availableFormat] : null;

    const url = availableFormat
        ? `${_MEDIA_URL_}${media.formats?.[availableFormat]?.url}`
        : media.url
            ? `${_MEDIA_URL_}${media.url}`
            : '';

    return {
        url,
        alt: media.alternativeText || '',
        width: selectedFormat?.width ?? media.width ?? 0,
        height: selectedFormat?.height ?? media.height ?? 0,
    };
};

export {
    getMediaUrl,
};