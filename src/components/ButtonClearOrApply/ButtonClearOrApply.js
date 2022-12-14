import React from "react";
import styles from './ButtonClearOrApply.module.css';

let renderBtn = 0;

export default function ButtonClearOrApply(props) {
    console.warn(`💡 ButtonClearOrApply ${props.name} render: ${++renderBtn}`);

    return <button onClick={props.clearOrApply} className={styles.buttonClearOrApply}>{props.name}</button>
};  