import React from 'react';
import styles from './BoxCards.module.css';
import HeadersCards from "../HeadersCards/HeadersCards";
import HeadersCardsThree from "./HeadersCardsThree/HeadersCardsThree";
export default function BoxCards() {

    return (
        <div className={styles.box_cards}>
            <HeadersCards name="Найдём номера под ваши пожелания" />
            <HeadersCardsThree name="прибытие"/>
        </div>
    );
};
