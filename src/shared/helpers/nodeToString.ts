// Функция для преобразования ReactNode в строку
import React from 'react';

const nodeToString = (node: React.ReactNode): string => {
    // @ts-expect-error
    return node?.[0].props?.text || '';
};

export {
    nodeToString,
}
