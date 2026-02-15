const getRandomNumberBetween = (min: number, max: number): number => {
    if (min > max) [min, max] = [max, min];
    return Math.random() * (max - min) + min;
}

export {
    getRandomNumberBetween,
}
