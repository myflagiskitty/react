import React from "react";
import styles from './pagination.module.css';

export default function Pagination(props) {
    return (
        <div>

            <div className={styles.row}>
                <h3 className={styles.header}>{props.header}</h3>
                
            </div>

            <div {...props} className={styles.slider}>
                <div className={styles.r}></div>
                <div className={styles.r}></div>
                <div className={styles.r}></div>
            </div>

<span className={styles.range}>{props.range}</span>

        </div>
    );
};//потом доделаю