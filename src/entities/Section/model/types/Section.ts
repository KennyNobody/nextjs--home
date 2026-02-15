import { ContentKeyType } from 'shared/types/CommonTypes';

export interface SectionType {
    id: number;
    title: string | null;
    years: string | null;
    linkPath: string | null;
    linkTitle: string | null;
    captionLinkPath: string | null;
    captionLinkTitle: string | null;
    contentKey: ContentKeyType;
}
