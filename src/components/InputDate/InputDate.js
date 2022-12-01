import React from 'react';
import styles from './InputDate.module.css';

export default function InputDate(props) {

    return (
        <>
            <input type={props.type}
                value={props.value}
                id="fname"
                name={props.name}
                placeholder={props.placeholder}
                className={styles.input_date}
            />{/*поменять стили- когда введины цифры они темные , когда их нет буквы светлые */}
        </>
    );
};
