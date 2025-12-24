'use client';

import { PageType } from 'entities/Page';
import { Main } from 'shared/ui/Main/Main';
import { SectionsStack } from 'widgets/SectionStack';

interface FrontPageProps {
    data?: PageType;
}

const FrontPage = (props: FrontPageProps) => {
    const { data } = props;

    return (
        <Main>
            {
                data?.section
                && (
                    <SectionsStack
                        isPreview
                        isLoading={false}
                        data={data.section}
                    />
                )
            }
        </Main>
    );
};

export default FrontPage;
