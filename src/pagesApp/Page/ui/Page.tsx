import { PageType } from 'entities/Page';
import { Main } from 'shared/ui/Main/Main';
import { SectionsStack } from 'widgets/SectionStack';

interface PageProps {
    data?: PageType;
    mode: 'front' | 'index';
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
                        isPreview={mode === 'front'}
                    />
                )
            }
        </Main>
    );
};

export {
    Page,
}
