import React from 'react';
import styles from './InputArrivalAndDeparture.module.css';

export default function InputArrivalAndDeparture(props) {

  return (
    <div>
      <h3 className={styles.header}>{props.header}</h3>
      
      <input className={styles.input_arrival_and_departure}
        type={props.type}
        step={props.step}
        id="fname"
        name={props.name}
        value={props.value}
        placeholder="ДД.ММ.ГГГГ"
        onChange={props.onChange}
      />
      {/*  */}

      <button className={styles.button} onClick={props.showCalendar}>expand_more</button>
      
    </div>
  );
};
