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
    setArrival(event.currentTarget.value); //вводим только число
  }

  if (typeof arrival === "string") {
    console.log(`${arrival} это строка`);
    if (isNaN(Number(arrival)) === false) {
      console.log(`${Number(arrival)} а теперь число`);
    }
    else {
      console.log(`${Number(arrival)} Not a Namber`);
    }

  }





  function showInputExit(event) {
    setExit(event.currentTarget.value);
  }
  // -------------------------------------------

  function PickUpNumbers() {
    // исходя из кол-ва гостей подбирается из массива номер
  }

  return (
    <div className={styles.box_cards}>

      <HeadersCards name="Найдём номера под ваши пожелания" />

      <form className={styles.box_row} >{/* onSubmit="функция для отправки формы" */}
        <InputArrivalAndDeparture
          header="прибытие"
          type='date'
          onInput={showInputArrival}
        />{/*при клике тип должен меняться type='number' */}
       
        <InputArrivalAndDeparture
          header="выезд"
          type='date'
          onInput={showInputExit}
        />
      </form>
      
      <form><input type="date"/></form>

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
