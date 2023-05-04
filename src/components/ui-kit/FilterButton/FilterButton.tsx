import React from 'react';
import {IFilterButtonProps} from "./FilterButton.props";
import styles from "./FilterButton.module.css";

const FilterButton = ({changeFilter, children}: IFilterButtonProps) => {
    return (
        <button onClick={changeFilter} className={styles.btnFilter}>{children}</button>
    );
};

export default FilterButton;