import React from 'react';
import styles from './Input.module.css';

export default function Input(props) {

    return (
        <input type={props.type}
            value={props.value}
            id="fname"
            name={props.name}
            placeholder={props.placeholder}
            className={styles.input}
        />
    );
};
