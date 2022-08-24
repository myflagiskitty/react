import React from "react";
import styles from './buttonFilled.module.css';

function ButtonFilled(props) {
    return (
        <div>
            <button {...props} className={styles.buttonFilled}>{props.names}</button>
        </div>
    );
};

export default ButtonFilled;
