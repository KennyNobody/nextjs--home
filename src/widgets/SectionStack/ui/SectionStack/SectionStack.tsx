import {
    SectionDev,
    SectionType,
    SectionPost,
    SectionPhoto,
    SectionLoading,
} from 'entities/Section';
import { ContentKeyType } from 'shared/types/CommonTypes';
import { Stack, StackSizeType } from 'shared/ui/Stack/Stack';

interface PageIndexProps {
    className?: string;
    isLoading: boolean;
    isPreview: boolean;
    data?: SectionType[];
}

export const SectionsStack = (props: PageIndexProps) => {
    const {
        data,
        className,
        isLoading,
        isPreview,
    } = props;

    if (isLoading) {
        return (
            <Stack size={StackSizeType.LARGE}>
                <SectionLoading isPreview />
            </Stack>
        );
    }

    return (
        <Stack size={StackSizeType.LARGE} className={className}>
            {data?.map((item) => {
                switch (item.contentKey) {
                case ContentKeyType.DEV:
                    return (
                        <SectionDev
                            key={item.id}
                            data={item}
                            isPreview={isPreview}
                        />
                    );
                case ContentKeyType.PHOTO:
                    return (
                        <SectionPhoto
                            key={item.id}
                            data={item}
                            isPreview={isPreview}
                        />
                    );
                case ContentKeyType.POST:
                    return (
                        <SectionPost
                            key={item.id}
                            data={item}
                            isPreview={isPreview}
                        />
                    );
                default:
                    return null;
                }
            })}
        </Stack>
    );
};
