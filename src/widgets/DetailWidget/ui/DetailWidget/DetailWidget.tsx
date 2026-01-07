'use client';
// TODO: Опустить use client до максимального возможного уровня

import Image from 'next/image';
import classNames from 'classnames';
import { AppTheme } from 'shared/types/Theme';
import { ArticleDevType } from 'entities/Dev';
import { ArticlePostType } from 'entities/Post';
import { ArticlePhotoType } from 'entities/Photo';
import { _BASE_URL_ } from 'shared/config/envConfig';
import { DetailEditor } from 'entities/DetailContent';
import { Container } from 'shared/ui/Container/Container';
import { useScrollPercent } from 'shared/hooks/useScrollPercent';
import FancyboxDecorator from 'shared/providers/FancyboxDecorator';
import cls from './DetailWidget.module.scss';
import { DetailIntro } from '../DetailIntro/DetailIntro';
import { DetailToolbar } from '../DetailToolbar/DetailToolbar';

interface DetailWidgetProps {
    className?: string;
    isLoading: boolean;
    data?: ArticlePostType | ArticleDevType | ArticlePhotoType;
}

export const DetailWidget = (props: DetailWidgetProps) => {
    const {
        data,
        className,
        isLoading,
    } = props;

    const opacity = useScrollPercent(0.75);
    let theme = data?.main?.previewInverted ? AppTheme.DARK : AppTheme.LIGHT;

    return (
        <div
            className={
                classNames(
                    cls.block,
                    cls[`block--${theme}`],
                    className,
                )
            }
        >
            <picture
                style={{ opacity }}
                className={classNames(cls.picture)}
            >
                {
                    data?.main?.preview?.data?.url
                    && (
                        <Image
                            unoptimized={true}
                            fill={true}
                            quality={100}
                            src={`${_BASE_URL_}${data?.main?.preview?.data?.url}`}
                            alt={data?.title || 'Обложка поста'}
                        />
                    )
                }
            </picture>
            <DetailIntro
                data={data}
                theme={theme}
                isLoading={isLoading}
            />
            <div
                className={classNames(cls['intro-main'])}
            >
                <Container>
                    {
                        data
                        && (
                            <DetailToolbar
                                data={data}
                                theme={theme}
                                isLoading={isLoading}
                            />
                        )
                    }

                </Container>
                {
                    data?.main?.content
                    && (
                        <Container className={classNames(cls['container-editor'])}>
                            <FancyboxDecorator>
                                <DetailEditor
                                    isLoading={isLoading}
                                    data={data.main.content}
                                />
                            </FancyboxDecorator>
                        </Container>
                    )
                }
            </div>
        </div>
    );
};
