import React from "react";
import styles from './pagination.module.css';

export default function Pagination(props) {
    return (
        <div {...props} className={styles.pagination}></div>
    );
};//потом доделаю