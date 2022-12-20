import React,{ useState } from 'react';
import styles from './BoxCards.module.css';
import HeadersCards from "../HeadersCards/HeadersCards";
import NewDropdown from "../NewDropdown/NewDropdown";
import ButtonFilledArrow from "../ButtonFilledArrow/ButtonFilledArrow";
import InputArrivalAndDeparture from "../InputArrivalAndDeparture/InputArrivalAndDeparture";

export default function BoxCards() {

  const [arrival, setArrival] = useState(0);//прибытие
  

  function PickUpNumbers() {
    // исходя из кол-ва гостей подбирается из массива номер
  }
  function ArrivalDay() {
    //фиксируется день прибытия
  }
  function DepartureDay() {
    //фиксируется день выезда
  }



  function Che() {
    setArrival(arrival + ".");//пока не знаю как из инпута вытащить введенное значение
  }

  return (
    <div className={styles.box_cards}>

      <HeadersCards name="Найдём номера под ваши пожелания" />

      <form className={styles.box_row} onSubmit="функция для отправки формы">
        
        <InputArrivalAndDeparture showCalendar={ArrivalDay}
          header="прибытие"
          type="number"
          onChange={Che}
          value={arrival}
        />{/*  */}


        <InputArrivalAndDeparture showCalendar={DepartureDay}
                                          header="выезд"
                                          type="number"   
                />
      </form>
      {/* ----------------------------------------------------------------------------- */}
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
