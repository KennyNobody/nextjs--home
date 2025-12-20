/**
 * Генерирует параметры фильтров для URL в формате Strapi
 * @param filters Объект фильтров в формате Record<string, string[]>
 * @returns Объект с параметрами для строки запроса
 */
function generateFilterParams(filters: Record<string, string[]> | undefined) {
    if (!filters || Object.keys(filters).length === 0) return {};

    const params: Record<string, any> = {};

    for (const [filterKey, filterValues] of Object.entries(filters)) {
        if (filterValues && filterValues.length > 0) {
            if (filterValues.length === 1) {
                // Для одного значения
                params[`filters[${filterKey}][slug][$eq]`] = filterValues[0];
            } else {
                // Для нескольких значений - с индексами
                filterValues.forEach((value, index) => {
                    params[`filters[${filterKey}][slug][$in][${index}]`] = value;
                });
            }
        }
    }

    return params;
}

export {
    generateFilterParams,
}
