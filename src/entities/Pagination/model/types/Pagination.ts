interface PaginationType {
    page: number;       // Текущая страница (которую запросили)
    pageSize: number;   // Количество элементов на странице
    pageCount: number;  // Общее количество страниц
    total: number;      // Общее количество записей в БД
}

export type {
    PaginationType,
}
