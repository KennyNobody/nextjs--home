import { PageType } from 'entities/Page';
import { Main } from 'shared/ui/Main/Main';
import { SectionsStack } from 'widgets/SectionStack';

enum PageMode {
    FRONT,
    INDEX,
    DETAIL,
}

interface PageProps {
    data?: PageType;
    mode: PageMode;
}

const Page = (props: PageProps) => {
    const {
        data,
        mode,
    } = props;

    return (
        <Main>
            {
                data?.section
                && (
                    <SectionsStack
                        data={data.section}
                        isPreview={mode === PageMode.FRONT}
                    />
                )
            }
        </Main>
    );
};

export {
    Page,
    PageMode,
}
