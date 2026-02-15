/**
 * Форматирует дату в указанный формат.
 * @param inputDate Дата в формате ISO, Date объект или строка.
 * @param mode Режим форматирования: "numeric" (21.01.2025) или "text" (21 января 2025).
 * @param lang Язык форматирования (по умолчанию 'ru').
 * @returns Отформатированная дата или null, если входная дата невалидна.
 */

interface FormatDateParams {
    inputDate: string | Date;
    mode?: 'numeric' | 'text';
    lang?: string;
}

function formatDate(args: FormatDateParams): string | null {
    const {
        inputDate,
        mode = 'numeric',
        lang = 'ru',
    } = args;

    if (!inputDate) {
        return null;
    }

    const date = new Date(inputDate);

    if (Number.isNaN(date.getTime())) {
        return null;
    }

    if (mode === 'numeric') {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    }

    if (mode === 'text') {
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };

        const formattedString = date.toLocaleDateString(lang, options);

        return lang === 'ru'
            ? formattedString.replace(/\s*г\.$/, '')
            : formattedString;
    }

    return null;
}

export { formatDate };
