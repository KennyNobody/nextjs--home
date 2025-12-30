import React, {Suspense} from 'react';
import classNames from 'classnames';
import grid from 'shared/styles/grid.module.scss';
import { Toolbar } from 'shared/ui/Toolbar/Toolbar';
import { Container } from 'shared/ui/Container/Container';
import { RouterLinks } from 'shared/config/routerConfig';
import { Stack, StackSizeType } from 'shared/ui/Stack/Stack';
import { Title, TitleModeType } from 'shared/ui/Title/Title';
import { LinkRegular } from 'shared/ui/LinkRegular/LinkRegular';
import cls from './SectionPost.module.scss';
import { SectionType } from '../../model/types/Section';
import { ListPostServer } from 'features/ListPost';
import {GridPosts} from "../../../Post";

interface SectionProps {
    isPreview: boolean;
    className?: string;
    data: SectionType | null;
}

export const SectionPost = (props: SectionProps) => {
    const {
        data,
        isPreview,
        className,
    } = props;

    return (
        <section className={classNames(cls.section, className)}>
            <Container>
                <Stack size={StackSizeType.MIDDLE}>
                    <div className={classNames(grid.grid, cls.grid)}>
                        <div
                            className={
                                classNames(
                                    grid['grid__col-2'],
                                    grid['grid__col-mob-4'],
                                )
                            }
                        >
                            {
                                data?.title
                                && (
                                    <Title mode={TitleModeType.REGULAR}>
                                        { data?.title }
                                    </Title>
                                )
                            }
                        </div>
                        <div
                            className={
                                classNames(
                                    grid['grid__col-2'],
                                    cls['cell-years'],
                                )
                            }
                        >
                            <Toolbar>
                                {
                                    data?.years
                                     && (
                                         <Title mode={TitleModeType.REGULAR}>
                                             { data.years }
                                         </Title>
                                     )
                                }
                            </Toolbar>
                        </div>
                        {
                            !isPreview
                            && (
                                <>
                                    <div
                                        className={
                                            classNames(
                                                grid['grid__col-2'],
                                                cls['cell-separator'],
                                            )
                                        }
                                    />
                                    <div
                                        className={
                                            classNames(
                                                grid['grid__col-2'],
                                                grid['grid__col-mob-4'],
                                            )
                                        }
                                    >
                                        <div>Фильтр постов</div>
                                        {/*<PostFilter*/}
                                        {/*    className={classNames(cls.category)}*/}
                                        {/*/>*/}
                                    </div>
                                </>
                            )
                        }
                    </div>
                    <Suspense fallback={<GridPosts showSkeleton/>}>
                        <ListPostServer isPreview={isPreview} />
                    </Suspense>
                    {
                        isPreview
                        && (
                            <div className={classNames(grid.grid, cls.grid)}>
                                <div
                                    className={
                                        classNames(
                                            grid['grid__col-2'],
                                            cls['col-clear'],
                                        )
                                    }
                                />
                                <div
                                    className={
                                        classNames(
                                            grid['grid__col-2'],
                                            grid['grid__col-mob-4'],
                                        )
                                    }
                                >
                                    <Toolbar
                                        className={
                                            classNames(
                                                cls['toolbar-bottom'],
                                            )
                                        }
                                    >
                                        <LinkRegular
                                            text={'Все заметки'}
                                            href={RouterLinks.POSTS.link}
                                        />
                                    </Toolbar>
                                </div>
                            </div>
                        )
                    }
                </Stack>
            </Container>
        </section>
    );
};
