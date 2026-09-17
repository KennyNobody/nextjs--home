import {
    SectionPost,
} from 'entities/Section';
import { Stack, StackSizeType } from 'shared/ui/Stack/Stack';

interface PageIndexProps {
    className?: string;
}

export const SectionsStack = (props: PageIndexProps) => {
    const {
        className,
    } = props;

    return (
        <Stack size={StackSizeType.LARGE} className={className}>
            <SectionPost isPreview={true} />
        </Stack>
    );
};
