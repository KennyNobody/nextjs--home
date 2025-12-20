import { MediaFileType } from 'entities/Media';
import { StatusType } from 'entities/Status';
import { UserType } from 'entities/User';
import { ArticleExpertType } from 'entities/Expert';
import { ArticleExpertApplicationType } from 'entities/ExpertApplication';

interface ArticleCaseType {
    id: number;
    documentId: string;
    title: string;
    description?: string;
    dateEnd?: Date | string;
    prize1: number;
    prize2: number;
    prize3: number;
    files?: MediaFileType[];
    statusPublish: StatusType;
    author: UserType;
    experts: ArticleExpertType[] | null;
    expertApplications: ArticleExpertApplicationType[] | null;
}

export {
    type ArticleCaseType,
}
