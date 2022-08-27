import React from "react";
import styles from './buttonFilledLonge.module.css';
import icon from "./arrow_forward.png";

function ButtonFilledLonge(props) {
    return (
            <button {...props} className={styles.buttonFilledLonge}>
                {props.names}
                <img className={styles.iconArrow} src={icon} alt="иконка" />
            </button>
    );
};

export default ButtonFilledLonge;
