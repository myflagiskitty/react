import React from 'react';
import styles from './Footer.module.css';
import Logo from "./Logo.svg"
import twitter from "./twitter.svg"
import facebook from "./facebook.svg"
import instagram from "./instagram.svg"
import FooterList from "../FooterList/FooterList"
import Subscription from "../Subscription/Subscription"
import Conteiner from "../Conteiner/Conteiner"

export default function Footer(props) {
  const listNavigation = ["О нас", "Новости", "Служба поддержки", "Услуги"];
  const listAboutUs = ["О сервисе", "Наша команда", "Ваканси", "Инвесторы"];
  const listSupportService = ["Соглашения", "Сообщества", "Связь с нами"];

  return (
    <footer className={styles.footer}>
      <Conteiner>
        <div className={styles.footer_conteiner}>
          <div className={styles.footer_colum}>
            <a href='#' key="уникальный номер">
              <img className={styles.footer__logo} src={Logo} alt="Logo" />
            </a>
            <div className={styles.h}>Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»</div>
          </div>
          <div className={styles.footer_colum}>
            <FooterList listLinks={listNavigation} label="навигация" />
          </div>
          <div className={styles.footer_colum}>
            <FooterList listLinks={listAboutUs} label="о нас" />
          </div>
          <div className={styles.footer_colum}>
            <FooterList listLinks={listSupportService} label="служба поддержки" />
          </div>
          <div className={styles.footer_colum}>
            <div className={styles.footer_label}>Подписка</div>
            <div className={styles.m}>Получайте специальные предложения и новости сервиса</div>
            <Subscription placeholder="Email" />
          </div>
        </div>
        <div className={styles.footer_conteiner_bottom}>
          <a className={styles.none__logo} href='#' key="уникальный номер">
            <img className={styles.footer__logo} src={Logo} alt="Logo" />
          </a>
          <div className={styles.tonix}>Copyright © 2018 Toxin отель. Все права защищены.</div>
          <div className={styles.socialNetwork}>
            <a href='#' key="уникальный номер"><img src={twitter} alt="Logo" /></a>
            <a href='#' key="уникальный номер"><img src={facebook} alt="Logo" /></a>
            <a href='#' key="уникальный номер"><img src={instagram} alt="Logo" /></a>
          </div>
        </div>
      </Conteiner>
    </footer>

  )
};