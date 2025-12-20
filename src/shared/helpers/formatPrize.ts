// @ts-ignore
const formatPrize = (amount) => {
    return new Intl.NumberFormat('ru-RU').format(amount) + ' ₽';
};

export {
    formatPrize,
}
