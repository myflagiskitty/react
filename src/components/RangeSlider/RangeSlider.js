import React from "react";
import styles from './RangeSlider.module.css';

export default function RangeSlider(props) {
  return (
    <div>

      <div className={styles.row}>
        <h3 className={styles.header}>{props.header}</h3>
        <span className={styles.range}>{props.range}</span>
      </div>

      <div {...props} className={styles.slider}></div>

      <span className={styles.clarification}>{props.clarification}</span>




      {/* переделать по примеру из инета 5-вариант  https://atuin.ru/blog/varianty-oformleniya-jquery-ui-slider/ */}
      {/* <div className={styles.polzunok_container_5} >
        <input className={styles.polzunok_input_5_left} type="text" />
        <input className={styles.polzunok_input_5_right} type="text" />
        <div className={styles.polzunok_5} ></div>
      </div> */}








    </div>
  );
};//потом доделаю