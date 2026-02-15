import { ReactNode } from 'react';
import { EditorWrapper } from 'shared/ui/EditorWrapper/EditorWrapper';

interface DetailParagraphProps {
    children: ReactNode;
}

export const DetailQuote = (props: DetailParagraphProps) => {
    const {
        children,
    } = props;

    return (
        <EditorWrapper>
            <blockquote>{ children }</blockquote>
        </EditorWrapper>
    );
};
