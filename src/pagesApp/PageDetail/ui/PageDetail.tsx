import { Main } from 'shared/ui/Main/Main';
import { DetailContentServer } from 'features/DetailContent';
import { ContentKeyType } from 'shared/types/CommonTypes';

interface PageProps {
    slug: string;
    mode: ContentKeyType;
}

const PageDetail = (props: PageProps) => {
    const {
        slug,
        mode
    } = props;

    return (
        <Main>
            <DetailContentServer
                slug={slug}
                mode={mode}
            />
        </Main>
    );
};

export {
    PageDetail,
}
