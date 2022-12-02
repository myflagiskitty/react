import React from 'react';
import styles from './InputArrivalAndDeparture.module.css';
import icon from "./expand_more.svg";

export default function InputArrivalAndDeparture(props) {

    return (
        <div>
            <h3 className={styles.header}>{props.header}</h3>

            <input type={props.type}
                value={props.value}
                id="fname"
                name={props.name}
                placeholder={props.placeholder}
                className={styles.input_arrival_and_departure}
            />
            <button className={styles.e} onClick={props.showCalendar}>
            <img  src={icon} alt="иконка" />
            </button>
        </div>
    );
};
