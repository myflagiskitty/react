import React from 'react';
import styles from './BoxCards.module.css';
import HeadersCards from "../HeadersCards/HeadersCards";
import Dropdown from "../Dropdown/Dropdown";
import ButtonFilledArrow from "../ButtonFilledArrow/ButtonFilledArrow";
import InputArrivalAndDeparture from "../InputArrivalAndDeparture/InputArrivalAndDeparture";

export default function BoxCards() {

    return (
        <div className={styles.box_cards}>
            <HeadersCards name="Найдём номера под ваши пожелания" />
                <form className={styles.box_row} method="post" action="http://localhost:8080/login.php">
                    <InputArrivalAndDeparture type="date" header="прибытие" />
                    <InputArrivalAndDeparture type="date" header="выезд" />
                </form>
            <Dropdown header="гости" />
            <ButtonFilledArrow names="Подобрать номер" />
        </div>
    );
};
