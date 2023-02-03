import React, { useState } from 'react';
import styles from './Subscription.module.css';

export default function Subscription(props) {

  const [arrival, setArrival] = useState();

  function showInputArrival(event) {
    console.log(setArrival(event.currentTarget.value)); 
  }

  return (
    <form className={styles.position}>
      
      <input placeholder={props.placeholder}
        type="email"
        name={props.name}
        className={styles.input}
        onSubmit={showInputArrival}
      />
      <button className={styles.arrow_forward}>arrow_forward</button>

      {/* в параметре передать функцию обратного 
      вызова которая будет вызыватьсяя по событию фотмы onSubmit 
      В эту функцию закидывать значения которые введено в инпут */}

      {/* 🤯мне не понятно что вообще происходит */}
    </form>
  );
};
