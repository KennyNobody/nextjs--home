'use client'

import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import picture from 'shared/assets/images/floppa.jpg';
import cls from './NotFoundApp.module.scss';
import { DataLabels } from '../../labels/data';
import { RouterConfig } from '../../config/routerConfig';

interface NotFoundAppProps {
    className?: string
}

export const NotFoundApp = (props: NotFoundAppProps) => {
    const { className } = props;

    const reloadPage = () => location.reload();

    return (
        <div className={classNames(cls.block, className)}>
            <picture className={classNames(cls.picture)}>
                <Image
                    width={224}
                    height={224}
                    src={picture}
                    unoptimized={true}
                    alt={ DataLabels.ALT_404 }
                />
            </picture>
            <h2 className={classNames(cls.title)}>
                { DataLabels.TITLE_404 }
            </h2>
            <p className={classNames(cls.caption)}>
                { DataLabels.DESCRIPTION_404 }
            </p>
            <Link
                onClick={reloadPage}
                href={RouterConfig.MAIN}
                className={classNames(cls.button)}
            >
                { DataLabels.LABEL_404 }
            </Link>
        </div>
    );
};
