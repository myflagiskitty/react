import React from 'react';
import styles from './InputArrivalAndDeparture.module.css';

export default function InputArrivalAndDeparture(props) {

  return (
    <div>
      <h3 className={styles.header}>{props.header}</h3>

      <input placeholder={props.placeholder}
             type={props.type}
             value={props.value}
             name={props.name}
             className={styles.input_date}
             onInput={props.onInput}
      />
  
      <button className={styles.button} onClick={props.showCalendar}>expand_more</button>
    </div>
  );
};

