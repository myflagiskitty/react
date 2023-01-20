import React from 'react';
import styles from './StarRating.module.css';


export default function StarRating(props) {



  return (
    
      <div>
        <button onClick={props.changeStarOne} className={styles.star_filed}>star</button>
        <button onClick={props.changeStarTwo} className={styles.star_filed}>star</button>
        <button onClick={props.changeStarThree} className={styles.star_filed}>star</button>
        <button onClick={props.changeStarFour} className={styles.star_border}>star</button>
        <button onClick={props.changeStarFive} className={styles.star_border}>star</button>
      </div>
    

  )
};
