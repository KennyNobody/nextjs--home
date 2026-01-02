import React, {Suspense} from 'react';
import classNames from 'classnames';
import { ListDevServer } from 'features/ListDev';
import grid from 'shared/styles/grid.module.scss';
import { Toolbar } from 'shared/ui/Toolbar/Toolbar';
import { SectionType } from 'entities/Section/index';
import { FilterDevServer } from 'features/FilterDev';
import { RouterLinks } from 'shared/config/routerConfig';
import { Container } from 'shared/ui/Container/Container';
import { LinkTitle } from 'shared/ui/LinkTitle/LinkTitle';
import { Stack, StackSizeType } from 'shared/ui/Stack/Stack';
import { Title, TitleModeType } from 'shared/ui/Title/Title';
import { LinkRegular } from 'shared/ui/LinkRegular/LinkRegular';
import cls from './SectionDev.module.scss';

interface SectionProps {
    isPreview: boolean;
    className?: string;
    data: SectionType | undefined;
}

export const SectionDev = (props: SectionProps) => {
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
                        <div className={classNames(grid['grid__col-2'])}>
                            {
                                data?.title
                                && (
                                    <Title mode={TitleModeType.REGULAR}>
                                        { data?.title }
                                    </Title>
                                )
                            }
                        </div>
                        <div className={classNames(grid['grid__col-2'])}>
                            <Toolbar className={classNames(cls.toolbarLinks)}>
                                {
                                    data?.linkTitle
                                    && data?.linkPath
                                    && (
                                        <LinkTitle
                                            href={data.linkPath}
                                        >
                                            { data.linkTitle }
                                        </LinkTitle>
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
                                                grid['grid__col-mob-4'],
                                            )
                                        }
                                    >
                                        <LinkRegular
                                            href="#"
                                            text={'CV'}
                                            className={classNames(cls.link)}
                                        />
                                    </div>
                                    <div
                                        className={
                                            classNames(
                                                grid['grid__col-2'],
                                                grid['grid__col-mob-4'],
                                            )
                                        }
                                    >
                                        <FilterDevServer />
                                    </div>
                                </>
                            )
                        }
                    </div>
                    <Suspense fallback={<div>Loading...</div>}>
                        <ListDevServer isPreview={isPreview} />
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
                                            href={RouterLinks.DEV.link}
                                            text={'Все проекты'}
                                        />
                                        {/* TODO: Указать ссылку на CV */}
                                        {/* <LinkRegular */}
                                        {/*     to="#" */}
                                        {/*     text={t('resume')} */}
                                        {/* /> */}
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
