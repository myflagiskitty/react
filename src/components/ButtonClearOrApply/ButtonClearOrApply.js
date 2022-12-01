import React from "react";
import styles from './ButtonClearOrApply.module.css';

export default function ButtonClearOrApply(props) {
    
    return <button className={styles.buttonClearOrApply}>{props.name}</button>
};  