import React, {ChangeEvent} from 'react';
import styles from './Filters.module.css';
import {setCookie} from '../../common/utils/cookie';

type FiltersPropsType = {
    filter: string;
    setFilter: (filter: string) => void
};

export const Filters = React.memo(({filter, setFilter}: FiltersPropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setCookie('filter', e.currentTarget.value);
        setFilter(e.currentTarget.value);
    };

    return (
        <div className={styles.wrapper}>
            <span>Filter by:</span>
            <select
                className={styles.filters}
                onChange={onChangeHandler}
                value={filter}
                tabIndex={1}
            >
                <option value="name">Name</option>
                <option value="size">Size</option>
                <option value="mtime">Create date</option>
            </select>
        </div>
    );
});
