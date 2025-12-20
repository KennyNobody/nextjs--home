// Функция для преобразования ReactNode в строку
import React from 'react';

const nodeToString = (node: React.ReactNode): string => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return node?.[0].props?.text || '';
};

export {
    nodeToString,
}
