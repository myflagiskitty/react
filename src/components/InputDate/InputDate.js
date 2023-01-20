import React from 'react';
import styles from './InputDate.module.css';

export default function InputDate(props) {

    return (
        <>
            <input placeholder={props.placeholder}
                   type={props.type}
                   value={props.value}
                   name={props.name}
                   className={styles.input_date}
            />
        </>
    );
};

