import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar(props) {

  return (

    <nav className={styles.j}>
      <ul className={styles.t}>
        <li className={styles.m}>
          <a href="#" key="уникальный номер" className={styles.l}>Landing page</a>
        </li>
        <li className={styles.m}>
          <a href="#" key="уникальный номер" className={styles.l}>Search room/Filter</a>
        </li>
        <li className={styles.m}>
          <a href="#" key="уникальный номер" className={styles.l}>Room details</a>
        </li>
        <li className={styles.m}>
          <a href="/registration" key="уникальный номер" className={styles.l}>Registration</a>
        </li>
        <li className={styles.m}>
          <a href="/signIn" key="уникальный номер" className={styles.l}>Sign in</a>
        </li>
      </ul>
    </nav>

  )
};