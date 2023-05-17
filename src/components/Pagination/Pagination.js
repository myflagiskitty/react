import React from "react";
import styles from './pagination.module.css';

export default function Pagination(props) {
    // сколько всего записей
    // и сколько записей на одной странице
    const pages = 10;
    const numberOfPages = [];
    for (let i = 1; i <= pages; i++){
        numberOfPages.push(i)
    }

    return (
        <div className={styles.column}>

            {/* <button>prev</button> */}
            
            {numberOfPages.map(page => {
                return (
                    <button className={styles.btnNumbersChecked}>{/* btnNumbers */}
                        <span className={styles.numbers}>{page}</span>{/* numbersChecked */}
                    </button>
                )
            })}

            <button className={styles.btnArrow}>
                <span className={styles.arrow}>arrow_forward</span> 
            </button>
              
            

        </div>
    );
};//потом доделаю по видео