import React from "react";
import styles from './buttonEmpty.module.css';

function ButtonEmpty(props) {
    return (
        <div className={styles.buttonEmpty}>
            <button className={styles.buttonEmptyText} {...props} >{props.names}</button>
        </div>
    );
};

export default ButtonEmpty;

