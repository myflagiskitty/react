import React from "react";
import styles from './pagination.module.css';

export default function Pagination(props) {
    return (
        <div className={styles.column}>

            тут 1  2  3 - 15 странички ➡️
            <span className={styles.range}>{props.range}</span>

        </div>
    );
};//потом доделаю по видео