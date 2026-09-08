'use client'

import Image from 'next/image';
import classNames from 'classnames';
import { getMediaUrl } from 'entities/Media';
import { AppTheme } from 'shared/types/Theme';
import { ArticleDevType } from 'entities/Dev';
import { ArticlePostType } from 'entities/Post';
import { ArticlePhotoType } from 'entities/Photo';
import { DetailEditor } from 'entities/DetailContent';
import { DetailIntro } from '../DetailIntro/DetailIntro';
import { Container } from 'shared/ui/Container/Container';
import { DetailToolbar } from '../DetailToolbar/DetailToolbar';
import { useScrollPercent } from 'shared/hooks/useScrollPercent';
import FancyboxDecorator from 'shared/providers/FancyboxDecorator';
import cls from './DetailContentClient.module.scss';

type ArticleDataType = ArticlePostType | ArticleDevType | ArticlePhotoType;

interface DetailContentClientProps {
    isLoading?: boolean;
    data?: ArticleDataType;
}

export const DetailContentClient = (props: DetailContentClientProps) => {
    const { data, isLoading } = props;

    const opacity = useScrollPercent(0.75);
    const theme = data?.main?.previewInverted ? AppTheme.DARK : AppTheme.LIGHT;

    const {
        url,
        alt,
    } = getMediaUrl(data?.main?.preview?.data, 'full');

    return (
        <div className={cls.block}>
            <picture className={cls.picture} style={{ opacity }}>
                {url && (
                    <Image
                        src={url}
                        fill={true}
                        quality={100}
                        sizes="(max-width: 1200px) 200vh, 100vw"
                        alt={alt || data?.title || 'Обложка поста'}
                    />
                )}
            </picture>

            <DetailIntro
                data={data}
                theme={theme}
                isLoading={isLoading}
            />

            {data?.main?.content && (
                <div className={cls['intro-main']}>
                    <Container>
                        <DetailToolbar data={data} theme={theme} />
                    </Container>

                    <Container className={cls['container-editor']}>
                        <FancyboxDecorator>
                            <DetailEditor data={data.main.content} />
                        </FancyboxDecorator>
                    </Container>
                </div>
            )}
        </div>
    );
};