import React from "react";
import styles from './buttonFilled.module.css';

export default function ButtonFilled(props) {

    if (props.names == "CLICK ME") {
        return (
            <button {...props} className={styles.buttonFilled}>{props.names}</button>
        );

    }
    if (props.names !== "CLICK ME") {
        return (
            <button {...props} className={styles.buttonFilledRound}>
                <span className={styles.spanFilledRound}>{props.names}</span>
            </button>
        );
    }
    
};//овал   если name = "CLICK ME" то овальные стили
