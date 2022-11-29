import React from 'react';
import styles from './Input.module.css';


export default function Input(props) {

    return (
        <div>

            <form method="post" action="http://localhost:8080/login.php">

                <input type={props.type}
                    value={props.value}
                    id="fname"
                    name={props.name}
                    placeholder={props.placeholder}
                    className={styles.input}
                />

            </form>

        </div>
    );
};
