import React from "react";
import styles from './buttonFilledRoundGreenArrow.module.css';
import icon from "./arrow_forward.png";

function ButtonFilledRoundGreenArrow(props) {
    return (
        <button {...props} className={styles.buttonFilledRoundGreenArrow}>
            <img src={icon} alt="иконка" />
        </button>
    );
};

export default ButtonFilledRoundGreenArrow;
