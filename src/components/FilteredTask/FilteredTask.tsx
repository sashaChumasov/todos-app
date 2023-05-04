import React from 'react';
import {IFilteredTaskProps} from "./FilteredTask.props";
import styles from "./FilteredTask.module.css";
import FilterButton from "../ui-kit/FilterButton/FilterButton";




const FilteredTask = ({children}: IFilteredTaskProps) => {
    return (
        <>
            <FilterButton>All</FilterButton>
            <FilterButton>Active</FilterButton>
            <FilterButton>Completed</FilterButton>
        </>
    );
};

export default FilteredTask;