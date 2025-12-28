import { type BlocksContent } from '@strapi/blocks-react-renderer';
import { MediaFileType } from '../../entities/Media';

// TODO: shared импортирует MediaFileType из entities
interface DetailContentType {
    id: number;
    preview?: {
        data: MediaFileType;
    },
    showPreview: boolean;
    previewTitle: string;
    previewCaption: string;
    previewInverted: boolean;
    content: BlocksContent;
}

export {
    type DetailContentType,
};
