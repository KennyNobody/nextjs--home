'use client'

import {
    getDevTag,
    devActions,
    fetchDevList,
} from 'entities/Dev';
import {
    ListCategory,
    ArticleCategoryType,
} from 'entities/Category';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/state/hooks';
import { Fieldset } from 'shared/ui/Fieldset/Fieldset';

interface FilterDevClientProps {
    data?: ArticleCategoryType[];
}

export const FilterDevClient = (props: FilterDevClientProps) => {
    const { data } = props;

    const dispatch = useAppDispatch();
    const activeTag: number | undefined = useSelector(getDevTag);

    const changeTag = (item: ArticleCategoryType | undefined): void => {
        dispatch(devActions.toggleTag(item?.id || undefined));
        dispatch(fetchDevList({
            mode: 'start',
            replace: true,
        }));
    }

    return (
        <Fieldset title={'Фильтр по тегам'}>
            <ListCategory
                data={data}
                selectEvent={changeTag}
                selectedItem={activeTag}
            />
        </Fieldset>
    );
};
