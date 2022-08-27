import React from "react";
import styles from './pageNumber.module.css';

function PageNumber(props) {
    return (
        <div {...props} className={styles.pageNumber}></div>
    );
};

export default PageNumber;