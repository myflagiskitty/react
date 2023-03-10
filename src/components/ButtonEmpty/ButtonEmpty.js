import React from "react";
import styles from './buttonEmpty.module.css';

export default function ButtonEmpty(props) {

  return (
    <>
      <div className={styles.conteiner}>
        <span className={styles.text}>{props.text}</span>
        <button className={styles.btn}>
          <span className={styles.span}>{props.name}</span>
        </button>
      </div>
    </>
  )
};



