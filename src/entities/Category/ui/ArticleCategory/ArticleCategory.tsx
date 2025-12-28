import classNames from 'classnames';
import { JSX } from 'react/jsx-runtime';
import { AppTheme } from 'shared/types/Theme';
import { Skeleton, SkeletonMode } from 'shared/ui/Skeleton/Skeleton';
import cls from './ArticleCategory.module.scss';
import { ArticleCategoryType } from '../../model/types/ArticleCategory';
import IntrinsicElements = JSX.IntrinsicElements;

export enum ArticleCategoryMode {
    STATIC,
    INPUT,
}

interface ArticleCategoryProps {
    name?: string;
    className?: string;
    isActive?: boolean;
    theme?: AppTheme;
    mode: ArticleCategoryMode;
    data?: ArticleCategoryType;
    clickEvent?: (arg0: ArticleCategoryType | undefined) => void;
}

export const ArticleCategory = (props: ArticleCategoryProps) => {
    const {
        data,
        mode,
        name,
        className,
        isActive,
        theme,
        clickEvent,
    } = props;

    const Tag: keyof IntrinsicElements = mode === ArticleCategoryMode.STATIC ? 'article' : 'label';

    const selectEvent = (): void => {
        if (clickEvent) clickEvent(data);
    };

    const unselectEvent = (): void => {
        if (clickEvent && isActive) clickEvent(undefined);
    };

    const skeleton = (
        <Skeleton
            mode={SkeletonMode.BLOCK}
            className={
                classNames(
                    cls.block,
                    cls['block--skeleton'],
                    theme && cls[`block--${theme}`],
                    className,
                )
            }
        />
    );

    const content = (
        <Tag
            className={
                classNames(
                    cls.block,
                    theme && cls[`block--${theme}`],
                    cls['block--content'],
                    { [cls['block--label']]: mode === ArticleCategoryMode.INPUT },
                    { [cls['block--active']]: isActive },
                    className,
                )
            }
        >
            {
                mode === ArticleCategoryMode.INPUT
                && (
                    <input
                        name={name}
                        type="radio"
                        value={data?.id}
                        checked={isActive}
                        onClick={unselectEvent}
                        onChange={selectEvent}
                        className={classNames(cls.input)}
                    />
                )
            }
            {data?.title}
        </Tag>
    );

    return data ? content : skeleton;
};
