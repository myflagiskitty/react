import React, { useState } from 'react';
import styles from './ExpandableCheckboxList.module.css';
import Checkbox from "../Checkbox/Checkbox";

export default function ExpandableCheckboxList(props) {

  const [value, setValue] = useState(false);

  function Сhange() {
    setValue(!value);
  }

  return (
    <div>

      <button onClick={Сhange} className={styles.dropdown_btn}>

        <div className={styles.header}>{props.header}</div>
        <span className={value ? styles.rotate_expand_more : styles.expand_more}>expand_more</span>
      </button>

      {
        value ?
          <div className={styles.j}>
            
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
            
            <div className={styles.clear}></div>

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
          :
          null
      }
    </div>
  );

};