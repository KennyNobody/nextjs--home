interface MediaFileType {
    id: number;
    name: string;
    alternativeText?: string | null;
    caption?: string | null;
    width?: number | null;
    height?: number | null;
    formats?: {
        thumbnail?: MediaFormatType;
        small?: MediaFormatType;
        medium?: MediaFormatType;
        large?: MediaFormatType;
        [key: string]: MediaFormatType | undefined;
    } | null;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: string | null;
    provider: string;
    provider_metadata?: unknown | null;
    createdAt: string;
    updatedAt: string;
}

interface MediaFormatType {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    path?: string | null;
    url: string;
}

export type {
    MediaFileType,
    MediaFormatType,
}
