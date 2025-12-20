import { ResponseType } from 'shared/types/ResponseType';
import { ArticleCaseType } from 'entities/Case';

type CaseDetailResponseType = ResponseType<ArticleCaseType>;

export type {
    CaseDetailResponseType,
}
