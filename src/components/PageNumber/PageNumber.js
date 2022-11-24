import React from "react";
import styles from './pageNumber.module.css';

export default function PageNumber(props) {
    return (
        <div {...props} className={styles.pageNumber}></div>
    );
};