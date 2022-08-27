//ContainerPagination
import React from "react";
import styles from './containerPagination.module.css';


function ContainerPagination(props) {
    return (
        <div {...props} className={styles.containerPagination}></div>
    );
};

export default ContainerPagination;
