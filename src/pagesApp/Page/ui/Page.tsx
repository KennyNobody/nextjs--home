import { PageType } from 'entities/Page';
import { Main } from 'shared/ui/Main/Main';
import { SectionsStack } from 'widgets/SectionStack';

interface PageProps {
    data?: PageType;
}

const Page = (props: PageProps) => {
    const {
    } = props;

    return (
        <Main>
            <SectionsStack />
        </Main>
    );
};

export {
    Page,
}
