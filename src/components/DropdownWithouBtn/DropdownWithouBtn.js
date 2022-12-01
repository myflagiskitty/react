import React, { useState } from 'react';
import styles from './DropdownWithouBtn.module.css';
import icon from "./expand_more.svg";
import Counter from "../Counter/Counter";


export default function DropdownWithouBtn(props) {

    const [value, setValue] = useState(false);
    const [bedrooms, setBedrooms] = useState(0);//значение щетчика для спальни
    const [beds, setBeds] = useState(0);//значение щетчика для  кровати
    const [bathrooms, setBathrooms] = useState(0);//значение щетчика для ванные комнаты

    function Сhange() {
        setValue(!value);
    }

    let sumRooms = bedrooms + beds + bathrooms;
    if (sumRooms > 10) {
        sumRooms = 10;
    }

    function ClearCounter(sumRooms) {
        if (sumRooms > 0) {
            return sumRooms === 0;
        }
    }

    return (
        <div className={styles.input_dropdown}>
            <h3 className={styles.header}>{props.header}</h3>
            <button onClick={Сhange} className={value ? styles.dropdown_btn_open : styles.dropdown_btn}>
                {sumRooms === 0 ? 'Сколько гостей' : sumRooms + " " + (sumRooms)}
                <img className={styles.expand_more} src={icon} alt="иконка" />
            </button>
            {
                value ?
                    <div className={styles.dropdown_div}>
                        <div className={styles.dropdown_row}>
                            <Counter header='спальни'
                                     value={bedrooms}
                                     increment={() => sumRooms <= 9 ? setBedrooms(bedrooms + 1) : setBedrooms(bedrooms)}
                                     decrement={() => bedrooms >= 1 ? setBedrooms(bedrooms - 1) : setBedrooms(bedrooms)}
                            />
                        </div>
                        <div className={styles.dropdown_row}>
                            <Counter header='кровати'
                                     value={beds}
                                     increment={() => sumRooms <= 9 ? setBeds(beds + 1) : setBeds(beds)}
                                     decrement={() => beds >= 1 ? setBeds(beds - 1) : setBeds(beds)}
                            />
                        </div>
                        <div className={styles.dropdown_row}>
                            <Counter header='ванные комнаты'
                                     value={bathrooms}
                                     increment={() => sumRooms <= 9 ? setBathrooms(bathrooms + 1) : setBathrooms(bathrooms)}
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