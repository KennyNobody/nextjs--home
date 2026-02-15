import {
    useEffect,
    RefObject,
} from 'react';

export interface useInfiniteScrollOptions {
    callback: () => void;
    triggerRef: RefObject<HTMLDivElement | null>;
}

export function useInfiniteScroll({ callback, triggerRef }: useInfiniteScrollOptions): void {
    useEffect(() => {
        const triggerElement = triggerRef.current;

        if (!triggerElement) return;

        const options = {
            root: document,
            rootMargin: '-1px 0px 0px 0px',
            threshold: [1],
        };

        const observer = new IntersectionObserver(([el]: IntersectionObserverEntry[]): void => {
            if (el.isIntersecting) callback();
        }, options);

        observer.observe(triggerElement);

        return (): void => {
            observer.disconnect();
        };
    }, [callback, triggerRef]);
}
