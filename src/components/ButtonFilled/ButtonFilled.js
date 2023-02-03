import React from "react";
import styles from './buttonFilled.module.css';

export default function ButtonFilled(props) {

    return (
        <>
    <button className={styles.buttonFilled}> <span>{props.name}</span></button>
   
    
    </>
    );
   
 
};
 {/* display: "flex" ,а вернее columnу(если сделать row то норм) подительского компонента все портит((( 
    но есть варианты https://ru.stackoverflow.com/questions/22387/%D0%A8%D0%B8%D1%80%D0%B8%D0%BD%D0%B0-div-%D0%BF%D0%BE-%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D1%82%D1%83 */}
