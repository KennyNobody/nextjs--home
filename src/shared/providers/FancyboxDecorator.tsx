import React, { useRef, useEffect, ReactNode } from 'react';
import { Fancybox as NativeFancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

interface FancyboxProps {
    className?: string;
    children: ReactNode;
    delegate?: string;
    options?: object;
}

export const FancyboxDecorator = (props: FancyboxProps) => {
    const {
        className,
        children,
        delegate,
        options,
    } = props;

    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        const delegateAttr = delegate || '[data-fancybox]';
        const optionsAttr = options || {};

        NativeFancybox.bind(container, delegateAttr, optionsAttr);

        return () => {
            NativeFancybox.unbind(container);
            NativeFancybox.close();
        };
    });

    return (
        <div
            ref={containerRef}
            className={className}
        >
            {children}
        </div>
    );
};

export default FancyboxDecorator;
