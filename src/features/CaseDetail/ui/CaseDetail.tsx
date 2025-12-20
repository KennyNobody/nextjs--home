'use client';

import React, { useEffect } from 'react';
import {
    useAppDispatch,
    useAppSelector,
} from 'shared/state/hooks';
import { useParams } from 'next/navigation';
import { getCaseDetailData } from '../model/selectors/caseDetail';
import { caseDetailActions } from '../model/slices/caseDetailSlice';
import { fetchCaseDetail } from '../model/services/fetchCaseDetail/fetchCaseDetail';

export const CaseDetail = () => {
    const params = useParams();
    const documentId = params?.documentId as string;
    const dispatch = useAppDispatch();
    const data = useAppSelector(getCaseDetailData);

    if (!documentId) return null;

    useEffect(() => {
        if (!data) {
            dispatch(fetchCaseDetail({
                caseId: documentId,
            }))
        }
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchCaseDetail({
            caseId: documentId,
        }));

    }, [documentId]);

    useEffect(() => {
        return () => {
            dispatch(caseDetailActions.resetData());
        }
    }, []);

    if (!data) return null;

    return (
        <div className="bg-gray-50">
            <div className="">
                {/* Header Section */}
                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">

                    <div className="mb-6">
                        {
                            data?.title
                            && (
                                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                                    { data.title }
                                </h1>
                            )
                        }
                        {
                            data?.description
                            && (
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                    { data.description }
                                </p>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
