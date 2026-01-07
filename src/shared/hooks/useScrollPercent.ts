import {
    useState,
    useEffect,
} from 'react';

const calcOpacity = (offset: number, height: number, ratio: number): number => {
    if (offset >= height) return 1;

    const offsetFloor = Math.floor(offset);
    const offsetHeight = Math.floor(height * ratio);

    return offsetFloor / (offsetHeight - 1);
};

export const useScrollPercent = (ratio: number) => {
    const [scrollPosition, setScrollPosition] = useState<number>(1);

    useEffect(() => {
        const updatePosition = () => {
            const opacity = calcOpacity(window.scrollY, window.innerHeight, ratio);
            setScrollPosition(1 - opacity);
        };
        window.addEventListener('scroll', updatePosition);
        updatePosition();
        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    return scrollPosition;
};
