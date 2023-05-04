import React from 'react';
import {ITodoTitleProps} from "./TodoTitle.props";

const TodoTitle = ({children}: ITodoTitleProps) => {
    return (
        <h3>{children}</h3>
    );
};

export default TodoTitle;