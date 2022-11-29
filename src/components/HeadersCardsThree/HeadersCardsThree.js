import React from 'react';
import styles from './HeadersCardsThree.module.css';


export default function HeadersCardsThree(props) {

    return (
            <h1 className={styles.headers_cards_three}>{props.name}</h1>
    );
};