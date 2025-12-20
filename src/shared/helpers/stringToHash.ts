/**
 * Генерирует стабильный хеш из строки
 * @param str - входная строка
 * @returns 8-символьный хеш в виде строки
 */
export const stringToHash = (str: string): string => {
    let hash = 0;

    // console.log(str);

    if (str.length === 0) return hash.toString();

    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Преобразуем в 32-битное целое число
    }

    return Math.abs(hash).toString(16).slice(0, 8);
};
