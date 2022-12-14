import React from 'react';
import styles from './BoxCards.module.css';
import HeadersCards from "../HeadersCards/HeadersCards";
import Dropdown from "../Dropdown/Dropdown";
import ButtonFilledArrow from "../ButtonFilledArrow/ButtonFilledArrow";
import InputArrivalAndDeparture from "../InputArrivalAndDeparture/InputArrivalAndDeparture";

export default function BoxCards() {

  function PickUpNumbers(){
    // исходя из кол-ва гостей подбирается из массива номер
  }

  function ArrivalDay(){
    //фиксируется день прибытия
  }

  function DepartureDay(){
    //фиксируется день выезда
  }

    return (
        <div className={styles.box_cards}>

            <HeadersCards name="Найдём номера под ваши пожелания" />

            <form className={styles.box_row} onSubmit="функция для отправки формы">
                {/* эти инпуты поменять по стилю и сделать их только числами и через точку и добавить галочку-кнопку на будующий календарь*/}
                <InputArrivalAndDeparture showCalendar={ArrivalDay} 
                                          type="number" 
                                          header="прибытие" 
                                // все что ниже я не знаю для чего?
                                          size="4"
                                          step="1" 
                                          min="1" 
                                          max="27"
                />
                {/* <InputArrivalAndDeparture showCalendar={DepartureDay}
                                          type="number" 
                                          header="выезд" 
                /> */}
            </form>
            <div className={styles.fix}>
                <Dropdown header="гости" />
            </div>
            <div className={styles.fix_btn}>
                <ButtonFilledArrow name="Подобрать номер"
                                   pickUpNumbers={PickUpNumbers} />
            </div>

        </div>
    );
};
