import { MediaFileType } from 'entities/Media';
import { type BlocksContent } from '@strapi/blocks-react-renderer';

interface DetailContentType {
    id: number;
    preview?: {
        data: MediaFileType;
    },
    showPreview: boolean;
    previewTitle: string | null;
    previewCaption: string | null;
    previewInverted: boolean;
    content: BlocksContent;
}

export {
    type DetailContentType,
};
