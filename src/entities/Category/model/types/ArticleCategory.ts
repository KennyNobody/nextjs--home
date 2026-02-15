interface ArticleCategoryType {
    id: number;
    title: string;
    slug: string;
    locale: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    publishedAt?: Date | string;
    // localizations?: {
    //     data: ArticleCategoryType[]
    // };
}

export {
    type ArticleCategoryType,
};
