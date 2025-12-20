import classNames from 'classnames';
import React, { useEffect } from 'react';
import {
    ArticleCase,
} from 'entities/Case';
import { useSelector } from 'react-redux';
import { Stack } from 'shared/ui/Stack/Stack';
import { Pagination } from 'entities/Pagination';
import { useAppDispatch } from 'shared/state/hooks';
import {
    caseListActions,
    getCaseListData,
} from '../../model/slices/caseListSlice';
import {
    getCaseListPagination
} from '../../model/selectors/caseList';
import { fetchCaseList } from '../../model/services/fetchCaseListData/fetchCaseListData';

interface CaseListPublicInterface {
    className?: string;
}

export const CaseListPublic = (props: CaseListPublicInterface) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const data = useSelector(getCaseListData.selectAll);
    const pagination = useSelector(getCaseListPagination);

    useEffect(() => {
        return () => {
            dispatch(caseListActions.resetParams());
        }
    }, []);

    useEffect(() => {
        dispatch(fetchCaseList({
            page: 1,
            replace: true,
        }));
    }, [dispatch]);

    const setPageNumber = (val: number, replace: boolean) => {
        dispatch(fetchCaseList({
            page: val,
            replace,
        }));
    };

    return (
        <div className={classNames(className)}>
            <Stack>
                {data?.map((item) => (
                    <ArticleCase
                        key={item.id}
                        data={item}
                    />
                ))}
            </Stack>
            {
                pagination
                && pagination?.pageCount > 1
                && (
                    <Pagination
                        data={pagination}
                        onPageChange={setPageNumber}
                    />
                )
            }
        </div>
    );
};
