import React, {useState} from 'react';
import FilteredTask from "../../components/FilteredTask/FilteredTask";
import AddItemForm from "../../components/AddItemForm/AddItemForm";
import TodoTitle from "../../components/ui-kit/TodoTitle/TodoTitle";
import TaskPage from "../TaskPage/TaskPage";
import styles from "./TodolistPage.module.css";
import {ITask} from "../TaskPage/TaskPage.props";

export type FilterType = 'all' | 'active' | 'completed'

const TodolistPage = () => {
    const [tasks, setTasks] = useState<ITask[]>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}]
    )
    const [filter, setFilter] = useState<FilterType>('all')

    let filteredTasks = tasks
    if (filter === 'active') {
        filteredTasks = tasks.filter(el => !el.isDone)
    }
    if (filter === 'completed') {
        filteredTasks = tasks.filter(el => el.isDone)
    }

    const removeTask = (taskId: number) => {
        setTasks(tasks.filter(el => taskId !== el.id))
    }
    const changeFilter = (value: FilterType) => {
        setFilter(value)
    }

    return (
        <div className={styles.todoBlock}>
            <TodoTitle>What to learn</TodoTitle>

            <AddItemForm/>

            <TaskPage tasks={filteredTasks} removeTask={removeTask}/>

            <FilteredTask changeFilter={changeFilter}/>

        </div>
    );
};

export default TodolistPage;