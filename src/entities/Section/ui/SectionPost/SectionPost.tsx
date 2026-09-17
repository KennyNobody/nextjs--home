import classNames from 'classnames';
import React, { Suspense } from 'react';
import { GridPosts } from 'entities/Post';
import { ListPostServer } from 'features/ListPost';
import { Container } from 'shared/ui/Container/Container';
import { Stack, StackSizeType } from 'shared/ui/Stack/Stack';
import cls from './SectionPost.module.scss';

interface SectionProps {
    isPreview: boolean;
    className?: string;
}

export const SectionPost = (props: SectionProps) => {
    const {
        isPreview,
        className,
    } = props;

    return (
        <section className={classNames(cls.section, className)}>
            <Container>
                <Stack size={StackSizeType.MEDIUM}>
                    <Suspense fallback={<GridPosts showSkeleton/>}>
                        <ListPostServer isPreview={isPreview} />
                    </Suspense>
                </Stack>
            </Container>
        </section>
    );
};
