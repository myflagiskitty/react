import React from "react";
import styles from './ButtonFilledArrow.module.css';
import icon from "./arrow_forward.png";

export default function ButtonFilledArrow(props) {

    if (props.names == "ПЕРЕЙТИ К ОПЛАТЕ") {
        return (
            <button {...props} className={styles.buttonFilledLonge}>
                {props.names}
                <img className={styles.iconArrow} src={icon} alt="иконка" />
            </button>
        );

    }
    if (props.names !== "ПЕРЕЙТИ К ОПЛАТЕ") {
        return (
            <button {...props} className={styles.buttonFilledRoundGreenArrow}>
            <img src={icon} alt="иконка" />
        </button>
        );

    }
};
