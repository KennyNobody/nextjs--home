import { Main } from 'shared/ui/Main/Main';
import { DetailWidget } from 'widgets/DetailWidget';
import { ArticlePostType } from 'entities/Post';
import { ArticleDevType } from 'entities/Dev';
import { ArticlePhotoType } from 'entities/Photo';

interface PageProps {
    data?: ArticlePostType | ArticleDevType | ArticlePhotoType;
}

const PageDetail = (props: PageProps) => {
    const {
        data,
    } = props;

    return (
        <Main>
            {
                data?.main
                && (
                    <DetailWidget
                        data={data}
                        isLoading={false}
                    />
                )
            }
        </Main>
    );
};

export {
    PageDetail,
}
