/**
 * Форматирует дату в указанный формат.
 * @param inputDate Строка с датой в формате ISO (например, "2025-05-04T15:32:45.739Z").
 * @param mode Режим форматирования: "numeric" (21.01.2025) или "text" (21 января 2025).
 * @returns Отформатированная дата или `null`, если входная строка невалидна.
 */
function formatDate(
    inputDate: string,
    mode: 'numeric' | 'text' = 'numeric'
): string | null {
    const date = new Date(inputDate);

    // Проверяем валидность даты
    if (isNaN(date.getTime())) {
        return null;
    }

    const day = date.getDate().toString().padStart(2, '0');
    const month = date.getMonth(); // 0-11
    const year = date.getFullYear();

    if (mode === 'numeric') {
        const formattedMonth = (month + 1).toString().padStart(2, '0');
        return `${day}.${formattedMonth}.${year}`;
    } else if (mode === 'text') {
        const monthNames = [
            'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
            'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
        ];
        return `${day} ${monthNames[month]} ${year}`;
    }

    // На случай, если передан неверный mode (можно заменить на throw new Error)
    return null;
}

export {
    formatDate,
}
