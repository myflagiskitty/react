import React from "react";
import styles from './buttonEmpty.module.css';

export default function ButtonEmpty(props) {

    return <button className={styles.buttonEmpty}>{props.name}</button>
};


 
