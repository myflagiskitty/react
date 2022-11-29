import React, { useState } from 'react';
import styles from './Counter.module.css';

export default function Counter(props) {



    return (
        <div className={styles.counter_row}>
            <div>{props.header}</div>

            <div className={styles.counter_div}>
                <button onClick={props.decrement}
                    className={props.value > 0 ? styles.calculation_btn : styles.calculation_decrement}>-</button>

                <div className={styles.count}>{props.value}</div>

                <button onClick={props.increment}
                    className={styles.calculation_btn}>+</button>
            </div>
        </div>
    )
};
