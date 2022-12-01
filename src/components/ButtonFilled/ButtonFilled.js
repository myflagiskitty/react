import React from "react";
import styles from './buttonFilled.module.css';

export default function ButtonFilled(props) {

    return <button className={styles.buttonFilled}>{props.name}</button>
};
