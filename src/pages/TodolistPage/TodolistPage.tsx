import React from 'react';
import FilteredTask from "../../components/FilteredTask/FilteredTask";
import AddItemForm from "../../components/AddItemForm/AddItemForm";
import TodoTitle from "../../components/ui-kit/TodoTitle/TodoTitle";
import TaskPage from "../TaskPage/TaskPage";
import styles from "./TodolistPage.module.css";
import {ITask} from "../TaskPage/TaskPage.props";


const TodolistPage = () => {
    const tasks1: ITask[] = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ]
    return (
        <div className={styles.todoBlock}>
            <TodoTitle>What to learn</TodoTitle>
            <div>
                <AddItemForm/>
            </div>
                <TaskPage tasks={tasks1}/>
            <div>
                <FilteredTask/>
            </div>
        </div>
    );
};

export default TodolistPage;