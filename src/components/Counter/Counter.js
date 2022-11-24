
import React, { useState } from 'react';
import styles from './Counter.module.css';

export default function Counter () {
    const [count, setCount] = useState(0)

    function increment() {

        if(count <= 9){
            setCount(count + 1);
            
        }
        else{
            setCount(count);
        }
    }

    function decrement() {
        if(count >= 1){
            setCount(count - 1);
        }
        else{
            setCount(count);
        }
    }

    return (
        <div className={styles.counter_div}>

            <button onClick={decrement} 
                    className={count > 0 ? styles.calculation_btn : styles.calculation_decrement}>-</button>

            <div className={styles.count}>{count}</div>

            
            <button onClick={increment} 
                    className={styles.calculation_btn}>+</button>
        </div>
    )
};
