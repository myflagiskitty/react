import React, { useState } from 'react';
import styles from './LinkDropdown.module.css';

export default function LinkDropdown(props) {

  const [agreements, setAgreements] = useState(false);

  function ChangeAgreements() {
    setAgreements(!agreements);
  }
  return (
    <>
      <button onClick={ChangeAgreements} className={styles.btn}>
        <span className={styles.btn__name}>{props.name}</span>
        <span className={styles.btn__expandMore}>expand_more</span>
      </button>
      {/* <button onClick={ChangeAgreements} className={styles.btn}>
        <span className={styles.btn__name}>{props.name}</span>expand_more
      </button> */}
      {
        agreements ?
          <ul className={styles.open_ul}>
            {props.listLinks.map((links, index) => {
              return <li className={styles.ul_list}>
                <a href="#" key="уникальный номер">{links}</a>
              </li>
            })}
          </ul>
          : null
      }
    </>
  )
};