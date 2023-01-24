import React from 'react';
import styles from './ListOfRules.module.css';

export default function ListOfRules(props) {

  return (
    <div>
      <h3 className={styles.header}>{props.header}</h3>

      <ul className={styles.description}>
        <li><span>{props.description1}</span></li>
        <li><span>{props.description2}</span></li>
        <li><span>{props.description3}</span></li>
      </ul>
    </div>
  )
};