import React from "react";
import styles from './buttonEmpty.module.css';

function ButtonEmpty(props) {
    return (
            <button className={styles.buttonEmpty} {...props}>{props.names}</button>
    );
};

export default ButtonEmpty;

