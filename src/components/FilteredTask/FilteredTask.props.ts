import {ReactNode} from "react";
import {FilterType} from "../../pages/TodolistPage/TodolistPage";

export interface IFilteredTaskProps {
    children?: ReactNode
    changeFilter: (value: FilterType) => void
}