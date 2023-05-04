import React, {useState, ChangeEvent} from 'react';
import {IEditableSpanProps} from "./EditableSpan.props";


const EditableSpan = ({children, ...props}: IEditableSpanProps): JSX.Element => {
    const [editMode, setEditMode] = useState(false)
    const [title, setTitle] = useState(props.title)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const offEditMode = () => {
        setEditMode(false)
    }
    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        <>
            {
                editMode ?
                    <input onChange={onChangeTitle}  autoFocus onBlur={offEditMode} type="text" value={title}/> :
                    <span onDoubleClick={activateEditMode}>{title}</span>
            }
        </>
    )
};

export default EditableSpan;