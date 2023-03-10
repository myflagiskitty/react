import React, { useState } from 'react';
import styles from './BoxCards.module.css';
import HeadersCards from "../HeadersCards/HeadersCards";
import NewDropdown from "../NewDropdown/NewDropdown";
import ButtonFilledArrow from "../ButtonFilledArrow/ButtonFilledArrow";
import InputArrivalAndDeparture from "../InputArrivalAndDeparture/InputArrivalAndDeparture";

export default function BoxCards() {

  const [arrival, setArrival] = useState();//прибытие
  const [exit, setExit] = useState();//выезд 

  function showInputArrival(event) {
    alert(setArrival(event.target.value)); //вводим только число
  }

  function showInputExit(event) {
    setExit(event.target.value);
  }

  function PickUpNumbers() {
    // исходя из кол-ва гостей подбирается из массива номер
  }

  return (
    <div className={styles.box_cards}>
      
      <div className={styles.header}>
        <HeadersCards name="Найдём номера под ваши пожелания" />
      </div>

      <form className={styles.box_row} >{/* onSubmit="функция для отправки формы" */}
        <InputArrivalAndDeparture
          placeholder="ДД.ММ.ГГГГ"
          header="прибытие"
          type='date'
          value={arrival}
          onInput={showInputArrival}
        />
        <InputArrivalAndDeparture
          placeholder="ДД.ММ.ГГГГ"
          header="выезд"
          type='date'
          onInput={showInputExit}
        />
      </form>

      <div className={styles.fix}>
        <NewDropdown header="гости" />
      </div>

      <div className={styles.fix_btn}>
        <ButtonFilledArrow name="Подобрать номер"
          pickUpNumbers={PickUpNumbers} />
      </div>

    </div>
  );
};
// c input тут беда, значение undefaind при проверке, кнопка не выводить "фэйковый календарик"
// и значение из даты никуда не уходит и многое другое...функциоонала нет