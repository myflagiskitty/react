
import React, { useState, useCallback } from 'react';
import styles from './NewDropdown.module.css';
import icon from "./expand_more.svg";// вместо иконки стить шрифта на весь инпут и он же кнопка
import Counter from "../Counter/Counter";
import ButtonClearOrApply from "../ButtonClearOrApply/ButtonClearOrApply";//как решить куда их добавить а куда нет?

export default function NewDropdown(props) {

  const [value, setValue] = useState(false);
  const [count1, setGrownup] = useState(0);//значение щетчика для взрослых  grownup
  const [count2, setChildren] = useState(0);//значение щетчика для детей   children
  const [count3, setBaby] = useState(0);//значение щетчика для младенцев       baby

  function Сhange() {
    setValue(!value);//восклицание это отрицание - логический оператор не (так как не можем задать точно значение)
  }

  let sumGuests = count1 + count2 + count3;

  if (sumGuests > 10) {
    sumGuests = 10;
  }
  // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  const Increment = useCallback(() => {
    if (sumGuests <= 9) {
      setGrownup(x => x + 1)
    }
  }, [sumGuests]);

  const Decrement = useCallback(() => {
    if (count1 >= 1) {
      setGrownup(x => x - 1)
    }
  }, [sumGuests]);
  // --------------------------------------
  const Increment2 = useCallback(() => {
    if (sumGuests <= 9) {
      setChildren(x => x + 1)
    }
  }, [sumGuests]);

  const Decrement2 = useCallback(() => {
    if (count2 >= 1) {
      setChildren(x => x - 1)
    }
  }, [sumGuests]);
  // --------------------------------------
  const Increment3 = useCallback(() => {
    if (sumGuests <= 9) {
      setBaby(x => x + 1)
    }
  }, [sumGuests]);

  const Decrement3 = useCallback(() => {
    if (count3 >= 1) {
      setBaby(x => x - 1)
    }
  }, [sumGuests]);
  // --------------------------------------
  const ClearCounter = useCallback(() => {
    if (sumGuests > 0) {
      setGrownup(0);
      setChildren(0);
      setBaby(0);
    }
  }, [sumGuests]);

  const ApplyCounter = useCallback(() => {
        setValue(!value);//то сворачиваем этот дропдаун    
  }, [value]);

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
              value={count1}
              increment={Increment}
              decrement={Decrement}
              id={1}
            />

            <Counter header='Дети'
              value={count2}
              increment={Increment2}
              decrement={Decrement2}
              id={2}
            />

            <Counter header='Младенцы'
              value={count3}
              increment={Increment3}
              decrement={Decrement3}
              id={3}
            />

            <div className={sumGuests > 0 ? styles.btn_add_or_clear : styles.btn_add}>

              {sumGuests > 0 ? <ButtonClearOrApply clearOrApply={ClearCounter} name="очистить" /> : null}
              <ButtonClearOrApply clearOrApply={ApplyCounter} name="применить" />
                
            </div>

          </div>
          :
          null
      }
    </div>
  );
}

function ChangeWordEndings(sumGuests) {
  if (sumGuests === 1) {
    return "гость";
  }
  if (sumGuests === 2 || sumGuests === 3 || sumGuests === 4) {
    return "гостя";
  }

  return "гостей";
}