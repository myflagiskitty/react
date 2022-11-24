import React from 'react';
import styles from './InputEmail.module.css';


export default function InputEmail (props) {

    return (
        <div>

            <form method="post" action="http://localhost:8080/login.php">
                
                <input type="text"
                       id="fname"
                       name="firstname"
                       placeholder={props.placeholder}
                       className={styles.input_email}
                     />

            </form>

        </div>
    );
};

