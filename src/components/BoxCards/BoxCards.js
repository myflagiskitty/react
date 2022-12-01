import React from 'react';
import styles from './BoxCards.module.css';
import HeadersCards from "../HeadersCards/HeadersCards";
import InputDropdown from "../InputDropdown/InputDropdown";
import ButtonFilledArrow from "../ButtonFilledArrow/ButtonFilledArrow";

import InputArrivalAndDeparture from "../InputArrivalAndDeparture/InputArrivalAndDeparture";

export default function BoxCards() {

    return (
        <div className={styles.box_cards}>

            <HeadersCards name="Найдём номера под ваши пожелания" />

            <div className={styles.box_row}>
                <InputArrivalAndDeparture type="date" header="прибытие" />
                <InputArrivalAndDeparture type="date" header="выезд" />
            </div>

            <InputDropdown  header="гости"/>

            <ButtonFilledArrow names="Подобрать номер" />

        </div>
    );
};
