import React from "react";
import styles from './mystyle.buttonEmpty.css';

function ButtonEmpty(props){
    return(
    <div>
        <button {...props} className={styles.buttonEmpty}>{props.names}</button>
    </div>
    );
};



export default ButtonEmpty;
