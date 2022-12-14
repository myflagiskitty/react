import React, { useState } from 'react';
import styles from './Counter.module.css';

const render = {
    count1: 0,
    count2: 0,
    count3: 0,
};
//React.memo() обворачиваем функцию для разделенного рендора
export default React.memo(function Counter(props) {
    console.warn(`🎈 Counter ${props.header} render: ${++render[`count${props.id}`]}`);

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
});

