'use client'

import Image from 'next/image';
import classNames from 'classnames';
import picture from 'shared/assets/images/cat.jpg';
import cls from './ErrorApp.module.scss';

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
                    alt={'декоративное изображение с плачущим котиком'}
                />
            </picture>
            <h2 className={classNames(cls.title)}>
                Извените у меня что-то сломалось
            </h2>
            <p className={classNames(cls.caption)}>
                Я сейчас пообедаю и починю
            </p>
            <button
                type="button"
                onClick={reloadPage}
                className={classNames(cls.button)}
            >
                А пока можете попробовать обновить страницу
            </button>
        </div>
    );
};
