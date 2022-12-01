import React from 'react';
import styles from './Calendar.module.css';
import iconBack from "./arrow_back.svg";
import iconForward from "./arrow_forward.svg";
import ButtonClearOrApply from "../ButtonClearOrApply/ButtonClearOrApply";

export default function Calendar() {

    return (
        <div className={styles.box}>
            <div className={styles.row}>
                <button>
                    <img className={styles.arrow} src={iconBack} alt="стрелка назад" />
                </button>
                <h2 className={styles.header}>Mесяц 2219</h2>
                <button>
                    <img className={styles.arrow} src={iconForward} alt="стрелка вперед" />
                </button>
            </div>
            <div className={styles.box_calendar}></div>
            <div className={styles.row}>
                <ButtonClearOrApply onClick="" name="очистить"/>
                <ButtonClearOrApply onClick="" name="применить"/>
            </div>
        </div>
    );
};
