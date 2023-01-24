import React from 'react';
import styles from './Features.module.css';

export default function Features(props) {

  return (
    <div>
      <h3 className={styles.header}>{props.header}</h3>

      <div className={styles.block}>
        <label className={styles.custom_checkbox}>
          <input type="checkbox" name="checkbox" />
          <span className={styles.checkbox_span}></span>
        </label>
        <span className={styles.labeltext}>{props.title1}</span>
        <span className={styles.description}>{props.description1}</span>
      </div>

      <div className={styles.clear}></div>

      <div className={styles.block}>
        <label className={styles.custom_checkbox}>
          <input type="checkbox" name="checkbox" />
          <span className={styles.checkbox_span}></span>
        </label>
        <span className={styles.labeltext}>{props.title2}</span>
        <span className={styles.description}>{props.description2}</span>
      </div>

    </div>
  )
};