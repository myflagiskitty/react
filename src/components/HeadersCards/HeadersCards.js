import React from 'react';
import styles from './HeadersCards.module.css';

export default function HeadersCards(props) {

    return <h2 className={styles.headers_cards}>{props.name}</h2>
};
