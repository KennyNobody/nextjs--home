import React, { ReactNode } from 'react';
import { EditorWrapper } from 'shared/ui/EditorWrapper/EditorWrapper';

interface DetailParagraphProps {
    children: ReactNode;
    format: 'ordered' | 'unordered';
}

export const DetailList = (props: DetailParagraphProps) => {
    const {
        format,
        children,
    } = props;

    const listTag = format === 'ordered' ? 'ol' : 'ul';

    return (
        <EditorWrapper>
            { React.createElement(listTag, null, children) }
        </EditorWrapper>
    );
};
