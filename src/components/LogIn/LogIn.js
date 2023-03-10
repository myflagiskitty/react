import React from "react";
import styles from './LogIn.module.css';
import HeadersCards from "../HeadersCards/HeadersCards";
import Input from "../Input/Input";
import ButtonFilledArrow from "../ButtonFilledArrow/ButtonFilledArrow";
import ButtonEmpty from "../ButtonEmpty/ButtonEmpty";

export default function LogIn(props) {

  return (
    <div className={styles.logIn}>

     
        <HeadersCards name="Войти" />
      

      <Input placeholder="Email" type="email" />
      <Input placeholder="Парль" type="password" />

      <ButtonFilledArrow name="войти" />
      <ButtonEmpty name="создать" text="Нет аккаунта на Toxin?" />

    </div>
  )
};
