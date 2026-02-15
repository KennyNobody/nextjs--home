import React, { ReactNode } from 'react';
import { EditorWrapper } from 'shared/ui/EditorWrapper/EditorWrapper';

interface DetailParagraphProps {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    children: ReactNode;
}

export const DetailHeading = (props: DetailParagraphProps) => {
    const {
        level,
        children,
    } = props;

    const tag = `h${level > 0 && level < 7 ? level : 6}`;

    return (
        <EditorWrapper>
            { React.createElement(tag, null, children) }
        </EditorWrapper>
    );
};
