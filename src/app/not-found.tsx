import { Metadata } from 'next';
import { NotFoundApp } from 'shared/ui/NotFoundApp/NotFoundApp';
import { DataLabels } from '../shared/labels/data';

export const metadata: Metadata = {
    title: DataLabels.TITLE_404,
    description: DataLabels.DESCRIPTION_404,
};

export default function NotFound() {
    return <NotFoundApp />;
}
