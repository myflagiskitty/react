import React from 'react';
import styles from './Radio.module.css';

export default function Radio(props) {

  return (
    <div>

      <div className={styles.customRadio}>
        <label>
          <input type="radio" name="radio" checked onChange={() => { }} />
          <div className={styles.customRadio__label}>
            <span >{props.header1}</span>
          </div>
        </label>
      </div>

      <div className={styles.customRadio}>
        <label>
          <input type="radio" name="radio" onChange={() => { }} />
          <div className={styles.customRadio__label} >
            <span >{props.header2}</span>
          </div>
        </label>
      </div>

    </div>
  )
};
