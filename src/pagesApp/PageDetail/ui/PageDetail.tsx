import { Main } from 'shared/ui/Main/Main';
import { DetailContentServer } from 'features/DetailContent';

interface PageProps {
    slug: string;
}

const PageDetail = (props: PageProps) => {
    const {
        slug,
    } = props;

    return (
        <Main>
            <DetailContentServer
                slug={slug}
            />
        </Main>
    );
};

export {
    PageDetail,
}
