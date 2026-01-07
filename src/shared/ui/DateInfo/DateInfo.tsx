import classNames from 'classnames';
import cls from './DateInfo.module.scss';
import { formatDate } from '../../helpers/formatDate';

interface DateProps {
    date: Date | string;
    className?: string;
    mode?: 'numeric' | 'text';
    lang?: string;
}

export const DateInfo = (props: DateProps) => {
    const {
        date,
        className,
        mode = 'text',
        lang = 'ru',
    } = props;

    const formattedDate = formatDate({
        inputDate: date,
        mode,
        lang,
    });

    if (!formattedDate) return null;

    const isoDate = new Date(date).toISOString();

    return (
        <time
            dateTime={isoDate}
            className={classNames(cls.block, className)}
        >
            {formattedDate}
        </time>
    );
};
