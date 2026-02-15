/**
 * Конвертирует ISO string в формат datetime-local (YYYY-MM-DDTHH:mm)
 * @param isoString - дата в ISO формате (например, '2025-06-19T23:15:00.000Z')
 * @returns строка в формате datetime-local или пустая строка если конвертация невозможна
 */
export const isoToDatetimeLocal = (isoString?: string): string => {
    if (!isoString) return '';

    try {
        const date = new Date(isoString);

        // Проверяем, что дата валидна
        if (isNaN(date.getTime())) {
            return '';
        }

        // datetime-local требует формат YYYY-MM-DDTHH:mm
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        return `${year}-${month}-${day}T${hours}:${minutes}`;
    } catch {
        return '';
    }
};

/**
 * Конвертирует значение datetime-local в ISO string
 * @param datetimeLocalValue - значение в формате datetime-local (YYYY-MM-DDTHH:mm)
 * @returns дата в ISO формате (например, '2025-06-19T23:15:00.000Z') или пустая строка
 */
export const datetimeLocalToIso = (datetimeLocalValue?: string): string => {
    if (!datetimeLocalValue) return '';

    try {
        const date = new Date(datetimeLocalValue);

        // Проверяем, что дата валидна
        if (isNaN(date.getTime())) {
            return '';
        }

        return date.toISOString();
    } catch {
        return '';
    }
};
