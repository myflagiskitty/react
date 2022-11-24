import React from "react";
import styles from './labelOrTextCTC.module.css';

export default function LabelOrTextCTC(props) {
    return (       
            <div {...props} className={styles.labelOrTextCTC}>{props.names}</div>
    );
};

