import Image from 'next/image';
import React, { ReactNode } from 'react';
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
import IntrinsicElements = React.JSX.IntrinsicElements;

const customComponents = {
    paragraph: ({ children }: { children?: ReactNode }) => (
        <p className="p">{children}</p>
    ),

    heading: ({ children, level }: { children?: ReactNode; level: 1 | 2 | 3 | 4 | 5 | 6 }) => {
        const Tag = `h${level}` as keyof IntrinsicElements;
        const headingClasses: Record<number, string> = {
            1: 'text-4xl font-bold mb-6 text-gray-900',
            2: 'text-3xl font-semibold mb-5 text-gray-900',
            3: 'text-2xl font-semibold mb-4 text-gray-900',
            4: 'text-xl font-semibold mb-3 text-gray-900',
            5: 'text-lg font-semibold mb-2 text-gray-900',
            6: 'text-base font-semibold mb-2 text-gray-900',
        };
        return <Tag className={headingClasses[level]}>{children}</Tag>;
    },

    list: ({ children, format }: { children?: ReactNode; format: 'ordered' | 'unordered' }) => {
        const Tag = format === 'ordered' ? 'ol' : 'ul';
        const listClasses = format === 'ordered'
            ? 'list-decimal list-inside mb-4 space-y-2'
            : 'list-disc list-inside mb-4 space-y-2';
        return <Tag className={listClasses}>{children}</Tag>;
    },

    'list-item': ({ children }: { children?: ReactNode }) => (
        <li className="text-gray-700">{children}</li>
    ),

    link: ({ children, url }: { children?: ReactNode; url: string }) => (
        <a
            href={url}
            className="link"
        >
            {children}
        </a>
    ),

    image: ({ image, children }: {
        image: {
            url: string;
            alternativeText?: string | null;
            width?: number;
            height?: number
        };
        children?: ReactNode
    }) => (
        <figure className="mb-6">
            <Image
                src={image.url}
                width={image.width}
                height={image.height}
                alt={image.alternativeText || ''}
                className="Image"
            />
            {children && (
                <figcaption className="figcaption">
                    {children}
                </figcaption>
            )}
        </figure>
    ),

    quote: ({ children }: { children?: ReactNode }) => (
        <blockquote className="blockquote">
            {children}
        </blockquote>
    ),

    code: ({ children }: { children?: ReactNode }) => (
        <pre className="bg-gray-900 text-white p-4 rounded-lg mb-4 overflow-x-auto">
            <code className="text-sm font-mono">{children}</code>
        </pre>
    ),
};

interface EditorBlocksProps {
    data: BlocksContent;
}

export const EditorBlocks = ({ data }: EditorBlocksProps) => {
    return (
        <BlocksRenderer content={data} blocks={customComponents} />
    );
};
