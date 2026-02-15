'use client'

import { useEffect } from 'react'
import * as Sentry from '@sentry/nextjs'
import { ErrorApp } from 'shared/ui/ErrorApp/ErrorApp';

interface ErrorInterface {
    error: Error & { digest?: string }
    reset: () => void
}

export default function Error(props: ErrorInterface) {
    const { error } = props;

    useEffect(() => {
        Sentry.captureException(error, {
            tags: {
                errorBoundary: 'root',
            },
            extra: {
                digest: error.digest,
            },
        })
    }, [error])

    return <ErrorApp />;
}
