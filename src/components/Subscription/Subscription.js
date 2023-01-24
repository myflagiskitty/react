import React from 'react';
import styles from './Subscription.module.css';

export default function Subscription(props) {

  return (
    <div className={styles.position}>
      
      <input placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        name={props.name}
        className={styles.input}
      />
      <button className={styles.arrow_forward}>arrow_forward</button>
    </div>
  );
};
