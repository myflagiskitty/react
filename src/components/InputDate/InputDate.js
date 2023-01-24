import React from 'react';
import styles from './InputDate.module.css';

export default function InputDate(props) {

    return (
        <>
            <h3 className={styles.header}>{props.header}</h3>
            
            <input placeholder={props.placeholder}
                   type={props.type}
                   value={props.value}
                   name={props.name}
                   className={styles.input_date}
            />
        </>
    );
};

