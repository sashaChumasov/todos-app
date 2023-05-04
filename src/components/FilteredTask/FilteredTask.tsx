import React from 'react';
import {IFilteredTaskProps} from "./FilteredTask.props";
import styles from "./FilteredTask.module.css";
import FilterButton from "../ui-kit/FilterButton/FilterButton";




const FilteredTask = ({changeFilter, children}: IFilteredTaskProps) => {



    return (
        <>
            <FilterButton changeFilter={() => changeFilter('all')}>all</FilterButton>
            <FilterButton changeFilter={() => changeFilter('active')}>active</FilterButton>
            <FilterButton changeFilter={() => changeFilter('completed')}>completed</FilterButton>
        </>
    );
};

export default FilteredTask;