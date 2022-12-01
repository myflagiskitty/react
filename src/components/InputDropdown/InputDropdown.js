import React, { useState } from 'react';
import styles from './InputDropdown.module.css';
import icon from "./expand_more.svg";
import Counter from "../Counter/Counter";
import ButtonClear from "../ButtonClear/ButtonClear";
import ButtonApply from "../ButtonApply/ButtonApply";


export default function InputDropdown(props) {

    const [value, setValue] = useState(false);
    const [grownup, setGrownup] = useState(0);//значение щетчика для взрослых
    const [children, setChildren] = useState(0);//значение щетчика для детей
    const [baby, setBaby] = useState(0);//значение щетчика для младенцев

    function Сhange() {
        setValue(!value);//восклицание это отрицание - логический оператор не (так как не можем зада точно значение)
    }

    let sumGuests = grownup + children + baby;
    if (sumGuests > 10) {
        sumGuests = 10;
    }


    function ClearCounter(sumGuests) {
        if (sumGuests > 0) {
            return sumGuests === 0;
        }
    }

    return (
        <div className={styles.input_dropdown}>
            <h3 className={styles.header}>{props.header}</h3>
            <button onClick={Сhange} className={value ? styles.dropdown_btn_open : styles.dropdown_btn}>

                {sumGuests === 0 ? 'Сколько гостей' : sumGuests + " " + ChangeWordEndings(sumGuests)}

                <img className={styles.expand_more} src={icon} alt="иконка" />
            </button>
            {
                value ?
                    <div className={styles.dropdown_div}>

                        <div className={styles.dropdown_row}>
                            <Counter header='Взрослые'
                                value={grownup}
                                increment={() => sumGuests <= 9 ? setGrownup(grownup + 1) : setGrownup(grownup)}
                                decrement={() => grownup >= 1 ? setGrownup(grownup - 1) : setGrownup(grownup)}
                            />
                        </div>

                        <div className={styles.dropdown_row}>
                            <Counter header='Дети'
                                value={children}
                                increment={() => sumGuests <= 9 ? setChildren(children + 1) : setChildren(children)}
                                decrement={() => children >= 1 ? setChildren(children - 1) : setChildren(children)}
                            />
                        </div>

                        <div className={styles.dropdown_row}>
                            <Counter header='Младенцы'
                                value={baby}
                                increment={() => sumGuests <= 9 ? setBaby(baby + 1) : setBaby(baby)}
                                decrement={() => baby >= 1 ? setBaby(baby - 1) : setBaby(baby)}
                            />
                        </div>

                        <div className={sumGuests > 0 ? styles.btn_add_or_clear : styles.btn_add}>
                            {/* не знаю как очистить значение каунтера по клику на кнопку */}
                            {sumGuests > 0 ? <ButtonClear onClick={ClearCounter(sumGuests)} /> : null}
                            <ButtonApply onClick="" />
                        </div>

                    </div>
                    :
                    null
            }
        </div>
    );

};


function ChangeWordEndings(sumGuests) {
    if (sumGuests === 1) {
        return "гость";
    }
    if (sumGuests === 2 || sumGuests === 3 || sumGuests === 4) {
        return "гостя";
    }

    return "гостей";
}