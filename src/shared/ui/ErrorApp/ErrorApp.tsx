'use client'

import Image from 'next/image';
import classNames from 'classnames';
import picture from 'shared/assets/images/cat.jpg';
import cls from './ErrorApp.module.scss';
import {DataLabels} from "../../labels/data";

interface ErrorAppProps {
    className?: string
}

export const ErrorApp = (props: ErrorAppProps) => {
    const { className } = props;

    const reloadPage = () => location.reload();
    console.log(picture);

    return (
        <div className={classNames(cls.block, className)}>
            <picture className={classNames(cls.picture)}>
                <Image
                    width={224}
                    height={224}
                    src={picture}
                    unoptimized={true}
                    alt={DataLabels.ERROR_ALT}
                />
            </picture>
            <h2 className={classNames(cls.title)}>
                { DataLabels.ERROR_TITLE }
            </h2>
            <p className={classNames(cls.caption)}>
                { DataLabels.ERROR_DESCRIPTION }
            </p>
            <button
                type="button"
                onClick={reloadPage}
                className={classNames(cls.button)}
            >
                { DataLabels.ERROR_LABEL }
            </button>
        </div>
    );
};
