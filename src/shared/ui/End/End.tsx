import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import cls from './End.module.scss';
import { AppTheme } from 'shared/types/Theme';

interface EndProps {
    className?: string;
    themeProp?: AppTheme;
}

export const End = (props: EndProps) => {
    const {
        themeProp,
        className,
    } = props;
    const { t } = useTranslation();

    return (
        <p
            className={
                classNames(
                    cls.block,
                    themeProp && cls[`block--${themeProp}`],
                    className,
                )
            }
        >
            { t('articlesMessage') }
        </p>
    );
};
