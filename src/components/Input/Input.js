import React from 'react';
import styles from './Input.module.css';

export default function Input(props) {

    return (
        <div>
            <h3 className={styles.header}>{props.header}</h3>

            <input placeholder={props.placeholder}
                type={props.type}
                value={props.value}
                name={props.name}
                className={styles.input}

            />
        </div>
    );
};
