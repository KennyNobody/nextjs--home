interface ArticleCategoryType {
    id: number;
    title: string;
    slug: string;
    locale: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    // localizations?: {
    //     data: ArticleCategoryType[]
    // };
}

export {
    type ArticleCategoryType,
};
