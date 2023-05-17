import React from 'react';
import styles from './Conteiner.module.css';

export default function Conteiner(props) {
  return <div className={styles.conteiner} >{props.children}</div> 
}