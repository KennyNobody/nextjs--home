import { BuildProject } from '../../../config/types/types';

export const _IS_DEV_ = process.env.NODE_ENV === 'development';
export const _BASE_URL_ = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';
export const _MEDIA_URL_ = process.env.NEXT_PUBLIC_MEDIA_URL || process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
export const _PROJECT_ = BuildProject.FRONTEND;
