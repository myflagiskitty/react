import React from "react";
import styles from './ButtonFilledArrow.module.css';
import icon from "./arrow_forward.png";

export default function ButtonFilledArrow(props) {


    return (
        <div className={styles.button_filled_arrow}>
            <button  className={props.names !== "" ? styles.buttonFilledLonge : styles.buttonFilledRoundGreenArrow}>
                {props.names !== "" ? props.names : null}
                <img className={props.names !== "" ? styles.iconArrow : null}
                    src={icon}
                    alt="иконка" />
            </button>
        </div>
    )

};
