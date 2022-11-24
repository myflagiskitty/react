import React from "react";
import styles from './ButtonApplyAndClear.module.css';

export default function ButtonApplyAndClear() {
    return (
        <>
        <button className={styles.buttonApply}>Очистить</button>
        <button className={styles.buttonApply}>Применить</button>
        </>
    )
};  