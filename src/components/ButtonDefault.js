import React from "react";
import styles from './mystyle.module.css';

function ButtonDefault(props){
    console.log(props)
;    return(
    <div>
        <button className={styles.btnClick}>{props.names}</button>
    </div>
    )
}

//const element = <ButtonDefault name="CLICK ME" />;
//root.render(element);

export default ButtonDefault;
