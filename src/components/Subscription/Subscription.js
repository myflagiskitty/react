import React, { useState } from 'react';
import styles from './Subscription.module.css';

export default function Subscription(props) {

  const [email, setEmail] = useState();

  function showInputArrival(event) {

    setEmail(event.target.value);//запоминает значение
    console.log(event.target.value);

  }

  return (
    <>
      <form className={styles.position}>
        <input onChange={showInputArrival}
          value={email}
          placeholder={props.placeholder}
          type="email"
          name={props.name}
          className={styles.input}
        />
        <button className={styles.arrow_forward}>arrow_forward</button>
      </form>
    </>
  );
};
