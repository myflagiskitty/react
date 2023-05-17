import React from 'react';
import styles from './FooterList.module.css';

export default function FooterList(props) {
  return (
    <>
      <div className={styles.footer_label}>{props.label}</div>
      <nav className={styles.footer_menu + " " + styles.menuFooter}>
        <ul className={styles.menu_footer_list}>
          {props.listLinks.map((links, index) => {
            return <li className={styles.menu_footer_item}>
              <a className={styles.menu_footer_link} href="#" key="уникальный номер">{links}</a>
            </li>
          })}
        </ul>
      </nav>
    </>
  )
}