import { DetailContentClient } from 'features/DetailContent';

const PageDetailSkeleton = () => {
    return (
        <DetailContentClient isLoading={true} />
    );
};

export {
    PageDetailSkeleton,
}
