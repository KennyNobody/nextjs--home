import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import cls from './ArticleCase.module.scss';
import { RouterEndpoints } from 'shared/router/routerEndpoints';
import { ArticleCaseType } from '../../model/types/ArticleCase';

interface ArticleCaseProps {
    data: ArticleCaseType;
    className?: string;
}

export const ArticleCase = (props: ArticleCaseProps) => {
    const {
        data,
        className,
    } = props;

    return (
        <article key={data.id} className={classNames(cls.block, className)}>
            <div>
                <Link href={`${RouterEndpoints.CASES}/${data.documentId}`} className="text-xl">
                    {data.title}
                </Link>
            </div>

            <p>
                {data.description}
            </p>
        </article>
    );
};
