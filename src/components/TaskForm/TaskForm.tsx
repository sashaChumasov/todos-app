import React from 'react';
import {ITaskProps} from "../../pages/TaskPage/TaskPage.props";
import styles from "./TaskForm.module.css";

const TaskForm = (props: ITaskProps) => {

    const taskData = props.tasks.map(el => (
        <li className={styles.taskBlock} key={el.id}><input type="checkbox" checked={el.isDone}/><span>{el.title}</span></li>))

    return (
        <>
            {taskData}
        </>
    );
};

export default TaskForm;