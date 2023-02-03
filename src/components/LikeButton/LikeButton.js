import React, { useState } from 'react';
import styles from './LikeButton.module.css';

export default function LikeButton(props) {
  const [value, setValue] = useState(true);//изменение состояния, по умолчанию не нажато false
  const [like, setLike] = useState(6);//количество лайков по умолчанию
  

  function Change() {
    if (value === true){
      setLike(like+1);
      setValue(false);
    }
    if (value === false) {
      setLike(like-1);
      setValue(true);
    }
  }

  return (

    <button onClick={Change} className={value ? styles.like : styles.like_activate}>
      <span className={value ? styles.favorite_border : styles.favorite}>{value ? "favorite_border" : "favorite" }</span>{/*  */}
      <span className={value ? styles.gray_number : styles.color_number}>{like}</span>
    </button>   
  )
};

