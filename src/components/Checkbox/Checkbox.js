import React from 'react';
import styles from './Checkbox.module.css';

export default function Checkbox(props) {

  return (
    <div>

      <label className={styles.custom_checkbox}>
        <input type="checkbox" name="checkbox" />
        <span className={styles.checkbox_span}></span>
      </label>
      <span className={styles.labeltext}>{props.header1}</span>

      <div className={styles.clear}></div>

      <label className={styles.custom_checkbox}>
        <input type="checkbox" name="checkbox" />
        <span className={styles.checkbox_span}></span>
      </label>
      <span className={styles.labeltext}>{props.header2}</span>

      <div className={styles.clear}></div>

      <label className={styles.custom_checkbox}>
        <input type="checkbox" name="checkbox" />
        <span className={styles.checkbox_span}></span>
      </label>
      <span className={styles.labeltext}>{props.header3}</span>

      <div className={styles.y}></div>
    </div>
  )
};
