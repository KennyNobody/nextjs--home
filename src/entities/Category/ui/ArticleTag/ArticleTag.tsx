import classNames from 'classnames';
import { AppTheme } from 'shared/types/Theme';
import cls from './ArticleTag.module.scss';
import { ArticleCategoryType } from '../../model/types/ArticleCategory';

interface ArticleTagProps {
    data: ArticleCategoryType;
    className?: string;
    theme?: AppTheme;
}

export const ArticleTag = (props: ArticleTagProps) => {
    const {
        data,
        className,
        theme,
    } = props;

    return (
        <span
            className={
                classNames(
                    cls.block,
                    theme && cls[`block--${theme}`],
                    className,
                )
            }
        >
            #
            { data.title }
        </span>
    );
};
