import React from 'react';
import styles from './StarRating.module.css';
// import iconStar from "./star.svg";
// import iconStarBorder from "./star_border.svg";

// import { AiOutlineStar } from "react-icons/md";

export default function StarRating(props) {

  return (
    <div>
      <button onClick={props.changeStar} className={styles.button}>
        {/* <img  src={props.icon} alt="иконка" /> */}
        <span className={styles.star_border}>star</span>
      </button>
    </div>
  )
};
