import { ResponseType } from 'shared/types/ResponseType';
import { ArticleCaseType } from 'entities/Case';

type CaseListResponseType = ResponseType<ArticleCaseType[]>;

export type {
    CaseListResponseType,
}
