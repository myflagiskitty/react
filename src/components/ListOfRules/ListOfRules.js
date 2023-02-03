import React from 'react';
import styles from './ListOfRules.module.css';

export default function ListOfRules(props) {

  return (
    <div>
      <h3 className={styles.header}>{props.header}</h3>

      <ul className={styles.description}>

        {props.listRules.map((list, index) => {
          return <li><span key="уникальный номер" >{list}</span></li>
        })}

      </ul>
   
    </div>
  )
};