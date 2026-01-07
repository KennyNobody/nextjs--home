import { ReactNode } from 'react';

interface DetailLinkProps {
    url: string;
    children: ReactNode;
}

export const DetailLink = (props: DetailLinkProps) => {
    const {
        url,
        children,
    } = props;

    return (
        <a href={url} rel="noopener noreferrer" target="_blank">{ children }</a>
    );
};
