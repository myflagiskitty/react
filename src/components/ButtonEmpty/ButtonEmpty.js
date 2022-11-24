import React from "react";
//import React,{Component} from "react";//если мы хотим написать классом
import styles from './buttonEmpty.module.css';

// export default class ButtonEmpty extends Component{
//     render() {
//         return(
//             <button className={styles.buttonEmpty} {...props}>{props.names}</button>
//         )

//     }
// }


export default function ButtonEmpty(props) {
    return (
            <button className={styles.buttonEmpty} {...props}>{props.names}</button>
    );
};



