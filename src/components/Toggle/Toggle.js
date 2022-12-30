import React from 'react';
import styles from './Toggle.module.css';

export default function Toggle(props) {

  return (
    <div className={styles.row}>
      <label className={styles.switch}>
        <input type="checkbox" />{/*checked*/}
        <span className={styles.slider}></span>
      </label>
      <div className={styles.header}>{props.header}</div>
    </div>
  )
};
