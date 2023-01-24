import React, { useState } from 'react';
import styles from './DropdownWithouBtn.module.css';
import Counter from "../Counter/Counter";

export default function DropdownWithouBtn(props) {

  const [value, setValue] = useState(false);
  const [bedrooms, setBedrooms] = useState(2);//значение щетчика для спальни
  const [beds, setBeds] = useState(2);//значение щетчика для  кровати
  const [bathrooms, setBathrooms] = useState(0);//значение щетчика для ванные комнаты

  function Сhange() {
    setValue(!value);
  }

  return (
    <div className={styles.input_dropdown}>
      <h3 className={styles.header}>{props.header}</h3>
      <button onClick={Сhange} className={value ? styles.dropdown_btn_open : styles.dropdown_btn}>
        <span className={styles.string_clipping}>{bedrooms + " " + 'спальни' + "," + " " + beds + " " + 'кровати' + "," + " " + bathrooms + " " + 'ванные комнаты'}</span>
        <span className={styles.expand_more}>expand_more</span>
      </button>
      {
        value ?
          <div className={styles.dropdown_div}>
            <div className={styles.dropdown_row}>
              <Counter header='спальни'
                value={bedrooms}
                increment={() => bedrooms < 3 ? setBedrooms(bedrooms + 1) : setBedrooms(bedrooms)}
                decrement={() => bedrooms >= 1 ? setBedrooms(bedrooms - 1) : setBedrooms(bedrooms)}
              />
            </div>
            <div className={styles.dropdown_row}>
              <Counter header='кровати'
                value={beds}
                increment={() => beds < 4 ? setBeds(beds + 1) : setBeds(beds)}
                decrement={() => beds >= 1 ? setBeds(beds - 1) : setBeds(beds)}
              />
            </div>
            <div className={styles.dropdown_row}>
              <Counter header='ванные комнаты'
                value={bathrooms}
                increment={() => bathrooms < 2 ? setBathrooms(bathrooms + 1) : setBathrooms(bathrooms)}
                decrement={() => bathrooms >= 1 ? setBathrooms(bathrooms - 1) : setBathrooms(bathrooms)}
              />
            </div>
          </div>
          :
          null
      }
    </div>
  );

};