import React from 'react';
import styles from './UserReviews.module.css';
import LikeButton from "../LikeButton/LikeButton"

export default function UserReviews(props) {

  return (
    <div>
      <h3 className={styles.header}>{props.header}</h3>

      <div className={styles.row}>

        <div className={styles.column}>
          <img className={styles.photo} src={props.src} alt={props.alt} />{/* src="dubi.png"  alt="Зимняя равнина"*/}
          <LikeButton />
        </div>


        <div className={styles.text}>
          <span className={styles.name}>{props.name}</span>
          <span className={styles.date}>{props.date}</span>
          <p className={styles.feedback}>{props.feedback}</p>
        </div>

      </div>

    </div>
  )
};