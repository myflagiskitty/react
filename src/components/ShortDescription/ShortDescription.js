import React from 'react';
import styles from './ShortDescription.module.css';

export default function ShortDescription(props) {

  return (
    <div>
      <h3 className={styles.header}>{props.header}</h3>

      <div className={styles.blok}>
        <span className={styles.picture}>{props.picture}</span>

        <div className={styles.text}>
          <span className={styles.title}>{props.title}</span>
          <span className={styles.description}>{props.description}</span>
        </div>
      </div>

      

    </div>
  );
};
