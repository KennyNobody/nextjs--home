'use client';

import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import cls from './Pagination.module.scss';
import IconLeft from 'shared/assets/sprite/icon-arrow-left.svg';
import IconRight from 'shared/assets/sprite/icon-arrow-right.svg';
import { PaginationType } from '../../model/types/Pagination';

interface PaginationProps {
    className?: string;
    data: PaginationType;
    onPageChange?: (page: number, replace: boolean) => void;
}

export const Pagination = (props: PaginationProps) => {
    const {
        data,
        className,
        onPageChange,
    } = props;

    const { page, pageCount, pageSize, total } = data;

    const calculateItemsToLoad = () => {
        if (page < pageCount - 1) {
            return pageSize;
        } else {
            return ((page * pageSize) - total) * -1;
        }
    };

    const nextPagesCount = calculateItemsToLoad();

    const handlePageChange = (newPage: number, replace: boolean) => {
        if (onPageChange) onPageChange(newPage, replace);
    };

    const loadNextPage = () => {
        if (page < pageCount) handlePageChange(page + 1, true);
    };

    const loadPrevPage = () => {
        if (page > 1) handlePageChange(page - 1, true);
    };

    const loadItems = () => {
        if (page < pageCount) handlePageChange(page + 1, false);
    }

    const loadPageByNumber = (e: React.MouseEvent<HTMLAnchorElement>, val: number) => {
        e.preventDefault();
        handlePageChange(val, true);
    };

    const generatePages = () => {
        const pages = [];
        const maxPagesToShow = 3;
        const delta = Math.floor(maxPagesToShow / 2);

        pages.push(1);

        if (page - delta > 2) {
            pages.push('...');
        }

        for (let i = Math.max(2, page - delta); i <= Math.min(pageCount - 1, page + delta); i++) {
            pages.push(i);
        }

        if (page + delta < pageCount - 1) {
            pages.push('...');
        }

        if (pageCount > 1) {
            pages.push(pageCount);
        }

        return pages;
    };

    return (
        <div className={classNames(cls.block, className)}>
            {
                page < pageCount
                && (
                    <button
                        onClick={loadItems}
                        className={classNames(cls.button)}
                    >
                        Показать еще { nextPagesCount}
                    </button>
                )
            }

            <nav className={classNames(cls.nav)}>
                <button
                    type={'button'}
                    onClick={loadPrevPage}
                    className={classNames(cls.item)}
                >
                    <IconLeft
                        className={classNames(cls.icon)}
                    />
                </button>
                {generatePages().map((item, index) =>
                    item === '...' ? (
                        <span key={index} className={classNames(cls.item)}>
                            ...
                        </span>
                    ) : (
                        <Link
                            key={index}
                            href={`?page=${item}`}
                            onClick={(e) => loadPageByNumber(e, item as number)}
                            className={classNames(
                                cls.item,
                                item === page ? cls['item--active'] : null
                            )}
                        >
                            {item}
                        </Link>
                    )
                )}
                <button
                    type={'button'}
                    onClick={loadNextPage}
                    className={classNames(cls.item)}
                >
                    <IconRight
                        className={classNames(cls.icon)}
                    />
                </button>
            </nav>
        </div>
    );
};
