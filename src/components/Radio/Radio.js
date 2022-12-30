import React from 'react';
import styles from './Radio.module.css';

export default function Radio(props) {

  return (
    <div>
      <label className={styles.switch}>
        
      <input type="radio" value="man" checked name="gender" />Мужчина
      <span className={styles.slider}></span>
      <input type="radio" value="woman" name="gender" />Женщина
      <span className={styles.slider}></span>
      </label>
    </div>
  )
};
{/* 
        <input type="checkbox" />
        
      </label>
      <div className={styles.header}>{props.header}</div> */}