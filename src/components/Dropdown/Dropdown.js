import React, { useState } from 'react';
import styles from './Dropdown.module.css';
import icon from "./expand_more.svg";
import Counter from "../Counter/Counter";
import ButtonClearOrApply from "../ButtonClearOrApply/ButtonClearOrApply";


export default function Dropdown(props) {

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

    function ClearCounter() {
        if (sumGuests > 0) {
            setGrownup(0);
            setChildren(0);
            setBaby(0); 
        }
    }

    function ApplyCounter(){
        // здесь будет функция по "применению" изменений 
        // их надо куда-то отправить только пока не ясно куда    
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
                        
                            <Counter header='Взрослые'
                                     value={grownup}
                                     increment={() => sumGuests <= 9 ? setGrownup(grownup + 1) : setGrownup(grownup)}
                                     decrement={() => grownup >= 1 ? setGrownup(grownup - 1) : setGrownup(grownup)}
                            />
                            <Counter header='Дети'
                                     value={children}
                                     increment={() => sumGuests <= 9 ? setChildren(children + 1) : setChildren(children)}
                                     decrement={() => children >= 1 ? setChildren(children - 1) : setChildren(children)}
                            />
                            <Counter header='Младенцы'
                                     value={baby}
                                     increment={() => sumGuests <= 9 ? setBaby(baby + 1) : setBaby(baby)}
                                     decrement={() => baby >= 1 ? setBaby(baby - 1) : setBaby(baby)}
                            />
                        
                        <div className={sumGuests > 0 ? styles.btn_add_or_clear : styles.btn_add}>

                            {sumGuests > 0 ? <ButtonClearOrApply clearOrApply={ClearCounter}
                                                                 name="очистить" /> : null}
                            <ButtonClearOrApply onclearOrApply="ApplyCounter"
                                                name="применить"
                            />
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