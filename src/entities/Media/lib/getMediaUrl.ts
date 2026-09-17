import { _MEDIA_URL_, _MEDIA_PUBLIC_URL_ } from 'shared/config/envConfig';
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

const buildUrl = (path: string, base: string): string => {
    if (!path) return '';
    return /^https?:\/\//i.test(path) ? path : `${base}${path}`;
};

// Общая часть: выбирает нужный формат и достаёт сырой путь + метаданные
const resolveMediaPath = (
    media: MediaFileType | undefined,
    format: ImageFormatType,
): { path: string; alt: string; width: number; height: number } => {

    if (!media) {
        return { path: '', alt: '', width: 0, height: 0 };
    }

    if (format === 'full') {
        return {
            path: media.url || '',
            alt: media.alternativeText || '',
            width: media.width ?? 0,
            height: media.height ?? 0,
        };
    }

    const startIndex = FORMAT_PRIORITY.indexOf(format);
    const formatsToCheck = FORMAT_PRIORITY.slice(startIndex);

    const availableFormat = formatsToCheck.find(f => media.formats?.[f]?.url);
    const selectedFormat = availableFormat ? media.formats?.[availableFormat] : null;

    const path = availableFormat
        ? media.formats?.[availableFormat]?.url || ''
        : media.url || '';

    return {
        path,
        alt: media.alternativeText || '',
        width: selectedFormat?.width ?? media.width ?? 0,
        height: selectedFormat?.height ?? media.height ?? 0,
    };
};

// Для next/image — сервер, внутренний адрес
const getMediaUrl = (
    media: MediaFileType | undefined,
    format: ImageFormatType,
): MediaResult => {
    const { path, alt, width, height } = resolveMediaPath(media, format);
    return { url: buildUrl(path, _MEDIA_URL_), alt, width, height };
};

// Для прямых клиентских ссылок (Fancybox, скачивание) — публичный адрес
const getMediaPublicUrl = (
    media: MediaFileType | undefined,
    format: ImageFormatType,
): MediaResult => {
    const { path, alt, width, height } = resolveMediaPath(media, format);
    return { url: buildUrl(path, _MEDIA_PUBLIC_URL_), alt, width, height };
};

export {
    getMediaUrl,
    getMediaPublicUrl,
}