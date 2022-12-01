import React from 'react';
import styles from './Calendar.module.css';
import icon from "./arrow_back.svg";


export default function Calendar() {

    return (
        <div className={styles.box}>

            <div className={styles.row}>
                <button>
                <img className={styles.arrow_back} src={icon} alt="стрелка назад" />
                </button>

                <button>
                <img className={styles.arrow_} src={icon} alt="стрелка вперед" />
                </button>

            </div>

            <div className={styles.box_calendar}></div>
            <div className={styles.row}></div>


            <div></div>
            <div></div>

        </div>
    );
};
