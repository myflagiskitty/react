import React from "react";
import styles from './RegistrationCard.module.css';
import HeadersCards from "../HeadersCards/HeadersCards";
import Input from "../Input/Input";
import InputDate from "../InputDate/InputDate";
import Radio from "../Radio/Radio";
import Toggle from "../Toggle/Toggle";
import ButtonFilledArrow from "../ButtonFilledArrow/ButtonFilledArrow";
import ButtonEmpty from "../ButtonEmpty/ButtonEmpty";

export default function RegistrationCard(props) {

  return (

    <div className={styles.card}>
      
      <div className={styles.header}>
        <HeadersCards name="Регистрация аккаунта" />
      </div>

      <Input placeholder="Имя" type="text" />
      <Input placeholder="Фамилия" type="text" />

      <div className={styles.radio}>
        <Radio header1="Мужчина"
          header2="Женщина" />
      </div>

      <div className={styles.input_data}>
        <InputDate placeholder="ДД.ММ.ГГГГ" type="date" header="дата рождения" />
      </div>

      <Input placeholder="Email" type="email" header="Данные для входа в сервис" />

      <div className={styles.inut_margin}>
        <Input placeholder="Парль" type="password" />
      </div>

      <Toggle header="Получать спецпредложения" />

      <ButtonFilledArrow name="перейти к оплате" />
      <ButtonEmpty name="войти" text ="Уже есть аккаунт на Toxin"/>
      
    </div>

  )
}; 