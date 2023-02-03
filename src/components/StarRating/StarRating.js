import { render } from '@testing-library/react';
import React, { useState } from 'react';
import styles from './StarRating.module.css';


export default (props) => getA(props.aCount, props.aBigCount).map(x => x);

function getA(aCount, aBigCount) {
  if (aCount < 0) {
    console.warn("Ошибка в коде, общее кол-во звезд меньше 0");
    aCount = 0;
  }

  if (aBigCount < 0) {
    console.warn("Ошибка в коде, кол-во полных звезд меньше 0");
    aBigCount = 0;
  }

  if (aCount < aBigCount) {
    console.warn("Ошибка в коде, общее кол-во звезд меньше кол-ва полных звезд");
    aBigCount = aCount;
  }

  if (aCount === 0)
    return [];

  const arr = [];

  for (let i = 0; i < aCount; i++) {
    if (i < aBigCount)
      arr.push(<button className={styles.star_filed}>star</button>);
    else
      arr.push(<button className={styles.star_border}>star</button>);
  }

  return arr;
}



const t = {
  commonStarCount: 5,
  positiveStarCount: 4,
  commentsCount: 39,
  numberOfRoom: 450,
  costs: 5300,
  currency: 'rub',
  id: 1,
}
{/*я вижу количество звезд
я могу сама проголосовать и рейтинг будет пересчитываться а рядом написано сколько из скольки голововавших  */}
