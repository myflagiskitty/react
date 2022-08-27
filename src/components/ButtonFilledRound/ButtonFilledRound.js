import React from "react";
import styles from './buttonFilledRound.module.css';

function ButtonFilledRound(props) {
    return (
        <button {...props} className={styles.buttonFilledRound}>
            <span className={styles.spanFilledRound}>{props.names}</span>
        </button>
    );
};

export default ButtonFilledRound;