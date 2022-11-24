import React, { useState } from 'react';
import styles from './InputDropdown.module.css';
import icon from "./expand_more.svg";
import Counter from "../Counter/Counter";
import ButtonApplyAndClear from "../ButtonApplyAndClear/ButtonApplyAndClear";


export default function InputDropdown() {
    const [value, setValue] = useState(false);

    function Сhange() {
        setValue(!value);//восклицание это отрицание - логический оператор не (так как не можем зада точно значение)
    }

    return (
        <div>
            <button onClick={Сhange} className={value ? styles.dropdown_btn_open : styles.dropdown_btn}>
                Сколько гостей {/* sumGuests  */}
                <img className={styles.expand_more} src={icon} alt="иконка" />
            </button>
            {
                // [первый операнд - условие] ? [второй операнд] : [третий операнд]
                value ?
                    <div className={styles.dropdown_div}>
                        <div className={styles.dropdown_row}>
                            Взрослые
                            <Counter />                           
                        </div>
                        <div className={styles.dropdown_row}>
                            Дети
                            <Counter />
                        </div>
                        <div className={styles.dropdown_row}>
                            Младенцы
                            <Counter />
                        </div>

                        <div className={styles.btn_add_or_clear}>                          
                            <ButtonApplyAndClear />{/* если count>0 то очистка отображается */}
                        </div>
                    </div>
                    :
                    null
            }
        </div>
    );
 
};
