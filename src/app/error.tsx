'use client'

import { useEffect } from 'react'
import { ErrorApp } from 'shared/ui/ErrorApp/ErrorApp';

interface ErrorInterface {
    error: Error & { digest?: string }
    reset: () => void
}

export default function Error(props: ErrorInterface) {
    const {
        error,
        reset,
    } = props;

    useEffect(() => {
        // TODO: Отравить в Sentry
        console.error(error)
    }, [error])

    return <ErrorApp />;
}
