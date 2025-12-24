import { Metadata } from 'next';
import { MetaPageType } from '../types/CommonTypes';

const generatePageMetadata = (data: MetaPageType): Metadata => {
    if (!data) {
        return {
            title: '',
            description: '',
            keywords: '',
        };
    }

    return {
        title: data?.metaTitle || '',
        description: data?.metaDescription || '',
        keywords: data?.keywords || '',
        // TODO: Зачем other?
        other: {
            'other': JSON.stringify(data?.structuredData),
        },
    }
}

export {
    generatePageMetadata,
}
