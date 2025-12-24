import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
// import { ListPost } from '3_features/ListPost';
// import { PostFilter } from '3_features/PostFilter';
import grid from 'shared/styles/grid.module.scss';
import { Toolbar } from 'shared/ui/Toolbar/Toolbar';
import { Container } from 'shared/ui/Container/Container';
import { RouterLinks } from 'shared/config/routerConfig';
import { Stack, StackSizeType } from 'shared/ui/Stack/Stack';
import { Title, TitleModeType } from 'shared/ui/Title/Title';
import { LinkRegular } from 'shared/ui/LinkRegular/LinkRegular';
import cls from './SectionPost.module.scss';
import { SectionType } from '../../model/types/Section';

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

    const { t } = useTranslation();

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
                        {/* <div */}
                        {/*     className={ */}
                        {/*         classNames( */}
                        {/*             grid['grid__col-2'], */}
                        {/*             cls['cell-years'], */}
                        {/*         ) */}
                        {/*     } */}
                        {/* > */}
                        {/*     <Toolbar> */}
                        {/*         { */}
                        {/*             data?.years */}
                        {/*             && ( */}
                        {/*                 <Title mode={TitleModeType.REGULAR}> */}
                        {/*                     { data.years } */}
                        {/*                 </Title> */}
                        {/*             ) */}
                        {/*         } */}
                        {/*     </Toolbar> */}
                        {/* </div> */}
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
                    Список постов
                    {/*<ListPost isPreview={isPreview} />*/}
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
