import React from 'react';
import styles from './Checkbox.module.css';

export default function Checkbox(props) {

  return (
    <div>
      <h3 className={styles.header}>{props.header}</h3>

      <label className={styles.custom_checkbox}>
        <input type="checkbox" name="checkbox" />
        <span className={styles.checkbox_span}></span>
      </label>
      <span className={styles.labeltext}>{props.check1}</span>

      <div className={styles.clear}></div>

      <label className={styles.custom_checkbox}>
        <input type="checkbox" name="checkbox" />
        <span className={styles.checkbox_span}></span>
      </label>
      <span className={styles.labeltext}>{props.check2}</span>

      <div className={styles.clear}></div>

      <label className={styles.custom_checkbox}>
        <input type="checkbox" name="checkbox" />
        <span className={styles.checkbox_span}></span>
      </label>
      <span className={styles.labeltext}>{props.check3}</span>

       
    </div>
  )
};
