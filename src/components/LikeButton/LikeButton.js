import React from 'react';
import styles from './LikeButton.module.css';

export default function LikeButton(props) {

  return (
    
      <div style={{ display: "flex", flexDirection: "row" }}>
        {/* <button onClick={props.like} className={styles.like}>
          <span className={styles.favorite_border}>favorite_border</span>
          <span className={styles.gray_number}>2</span>
        </button> */}

        <button onClick={props.like} className={styles.like_activate}>
          <span className={styles.favorite}>favorite</span>
          <span className={styles.color_number}>12</span>
        </button>
      </div>
    
  )
};
