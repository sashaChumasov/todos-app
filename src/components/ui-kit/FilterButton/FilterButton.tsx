import React from 'react';
import {IFilterButtonProps} from "./FilterButton.props";
import styles from "./FilterButton.module.css";

const FilterButton = ({children}: IFilterButtonProps) => {
    return (
        <button className={styles.btnFilter}>{children}</button>
    );
};

export default FilterButton;