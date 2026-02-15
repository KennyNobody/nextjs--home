import classNames from 'classnames';
import cls from './FooterCaption.module.scss';

interface AuthorProps {
    data: string | null;
    className?: string;
}

export function FooterCaption(props: AuthorProps) {
    const {
        data,
        className,
    } = props;

    if (!data) return null;

    return (
        <div className={classNames(cls.block, className)}>
            { data }
        </div>
    );
}
