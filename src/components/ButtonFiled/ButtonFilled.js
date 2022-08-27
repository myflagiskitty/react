import React from "react";
import styles from './buttonFilled.module.css';

function ButtonFilled(props) {
    return (
            <button {...props} className={styles.buttonFilled}>{props.names}</button>
    );
};

export default ButtonFilled;
