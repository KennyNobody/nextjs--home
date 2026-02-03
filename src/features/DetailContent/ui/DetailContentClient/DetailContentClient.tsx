'use client'

import Image from 'next/image';
import classNames from 'classnames';
import { AppTheme } from 'shared/types/Theme';
import { ArticleDevType } from 'entities/Dev';
import { ArticlePostType } from 'entities/Post';
import { ArticlePhotoType } from 'entities/Photo';
import { _BASE_URL_ } from 'shared/config/envConfig';
import { DetailEditor } from 'entities/DetailContent';
import { DetailIntro } from '../DetailIntro/DetailIntro';
import { Container } from 'shared/ui/Container/Container';
import { DetailToolbar } from '../DetailToolbar/DetailToolbar';
import { useScrollPercent } from 'shared/hooks/useScrollPercent';
import FancyboxDecorator from 'shared/providers/FancyboxDecorator';
import cls from './DetailContentClient.module.scss';

// TODO: Вынести в Shared?
type ArticleDataType = ArticlePostType | ArticleDevType | ArticlePhotoType;

interface DetailContentClientProps {
    isLoading?: boolean;
    data?: ArticleDataType;
}

export const DetailContentClient = (props: DetailContentClientProps) => {
    const {
        data,
        isLoading,
    } = props;

    const opacity = useScrollPercent(0.75);
    let theme = data?.main?.previewInverted
        ? AppTheme.DARK
        : AppTheme.LIGHT;
    const imageUrl = data?.main?.preview?.data?.url
        ? `${_BASE_URL_}${data.main.preview.data.url}`
        : null;

    return (
        <div
            className={
                classNames(
                    cls.block,
                )
            }
        >
            <picture
                style={{ opacity }}
                className={classNames(cls.picture)}
            >
                {
                    imageUrl
                    && (
                        <Image
                            fill={true}
                            quality={100}
                            src={imageUrl}
                            unoptimized={true}
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

            {
                data
                && (
                    <div
                        className={classNames(cls['intro-main'])}
                    >
                        <Container>
                            <DetailToolbar
                                data={data}
                                theme={theme}
                            />

                        </Container>
                        {
                            data?.main?.content
                            && (
                                <Container className={classNames(cls['container-editor'])}>
                                    <FancyboxDecorator>
                                        <DetailEditor
                                            data={data.main.content}
                                        />
                                    </FancyboxDecorator>
                                </Container>
                            )
                        }
                    </div>
                )
            }
        </div>
    );
};
