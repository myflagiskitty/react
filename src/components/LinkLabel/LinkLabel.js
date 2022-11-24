import React from "react";
import styles from './linkLabel.module.css';


export default function LinkLabel(props) {
    return (
        <a {...props} className={styles.linkLabel} href="content.html">{props.names}</a>
    );
};

