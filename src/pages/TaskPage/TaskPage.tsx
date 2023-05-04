import React from 'react';
import TaskForm from "../../components/TaskForm/TaskForm";
import {ITaskProps} from "./TaskPage.props";

const TaskPage = (props: ITaskProps) => {
    return (
        <ul>
            <TaskForm tasks={props.tasks}/>
        </ul>
    );
};

export default TaskPage;