import React from "react";
import styles from './ButtonFilledArrow.module.css';


export default function ButtonFilledArrow(props) {

  return (
    
      <button className={styles.buttonFilledLonge}>
        <span className={styles.name}>{props.name}</span>
        <span className={styles.iconArrow}>arrow_forward</span>
      </button>

  )
}; 