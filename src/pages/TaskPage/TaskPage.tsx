import React from 'react';
import {ITaskProps} from "./TaskPage.props";
import styles from "./TaskPage.module.css";
import ActionButton from "../../components/ui-kit/ActionButton/ActionButton";
import EditableSpan from "../../components/EditableSpan/EditableSpan";


const TaskPage = (props: ITaskProps) => {

    const taskData = props.tasks.map(el => {
        const removeTask = () => {
            props.removeTask(el.id)
        }
        return <li className={styles.taskBlock} key={el.id}>
            <input type="checkbox" checked={el.isDone}/>
            {/*<span>{el.title}</span>*/}
            <EditableSpan title={el.title}/>
            <ActionButton onClickHandler={removeTask}>X</ActionButton>
        </li>
    })

    return (
            <ul className={styles.taskContainer}>
                {taskData}
            </ul>
    );
};

export default TaskPage;