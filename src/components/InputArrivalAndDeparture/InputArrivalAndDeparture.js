import React from 'react';
import styles from './InputArrivalAndDeparture.module.css';


export default function InputArrivalAndDeparture(props) {

    return (
        <div>
            <h3 className={styles.header}>{props.header}</h3>
            <form method="post" action="http://localhost:8080/login.php">

                <input type={props.type}
                    value={props.value}
                    id="fname"
                    name={props.name}
                    placeholder={props.placeholder}
                    className={styles.input_arrival_and_departure}
                />

            </form>

        </div>
    );
};
