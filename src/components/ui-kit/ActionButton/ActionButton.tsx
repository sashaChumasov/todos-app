import React from 'react';
import {IActionButtonProps} from "./ActionButton.props";
import styles from "./ActionButton.module.css";

const ActionButton = ({onClickHandler, children}: IActionButtonProps) => {
    return (
        <button className={styles.btn} onClick={onClickHandler}>{children}</button>
    );
};

export default ActionButton;