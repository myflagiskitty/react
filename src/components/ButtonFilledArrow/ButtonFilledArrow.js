import React from "react";
import styles from './ButtonFilledArrow.module.css';
import icon from "./arrow_forward.png";

export default function ButtonFilledArrow(props) {

    return (
        <div className={styles.button_filled_arrow}>
            <button onClick={props.pickUpNumbers} 
                    className={props.name !== "" ? styles.buttonFilledLonge : styles.buttonFilledRoundGreenArrow}>
                {props.name !== "" ? props.name : null}
                <img className={props.name !== "" ? styles.iconArrow : null}
                    src={icon}
                    alt="иконка" />
            </button>
        </div>
    )
};
//не получается вставить null вместо "" ...не работает 