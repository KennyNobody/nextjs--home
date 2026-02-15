import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import cls from './FileItem.module.scss';
import { MediaFileType } from 'entities/Media';
import { getAbsoluteUrl } from 'shared/helpers/getAbsoluteUrl';

interface FileItemProps {
    data: MediaFileType;
    className?: string;
}

export const FileItem = (props: FileItemProps) => {
    const {
        data,
        className
    } = props;

    return (
        <Link
            target={'_blank'}
            href={getAbsoluteUrl(data.url)}
            className={classNames(cls.block)}
            rel={'noopener noreferrer nofollow'}
        >
            {data.name}
        </Link>
    );
};
