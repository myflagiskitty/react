import React from 'react';
import styles from './Header.module.css';
import Logo from "./Logo.svg"
import Conteiner from "../Conteiner/Conteiner"
import ButtonEmpty from "../ButtonEmpty/ButtonEmpty"
import ButtonFilled from "../ButtonFilled/ButtonFilled"
import LinkDropdown from "../LinkDropdown/LinkDropdown"


export default function Header() {
  const listAgreements = ["общие положения", "оформление и оплата заказа", "отмена и внесение изменений", "дополнительные услуги", "конвертация валюты", "ограничение ответственности", "заключительные положения"];
  const listServices = ["бесплатный wi-fi", "бесплатная парковка", "бар", "ресторан", "парная", "крытый бассейн", "сауна",];

  return (
    // как если я нажала другой дробдаун то первый закрыть?
    <header className={styles.header}>
      <Conteiner>
        <div className={styles.header_conteiner}>
          {/* ------------------------------------------ */}
          <a href="#" key="уникальный номер"><img className={styles.header__logo} src={Logo} alt="Logo" /></a>


          <input className={styles.input} type="checkbox" id='burger' />
          <label for="burger"></label>
          <nav className={styles.header__menu}>

            <ul className={styles.menu__list}>
              <li className={styles.menu__item}>
                <a href="#" key="уникальный номер" className={styles.menu__link}>о нас</a>
              </li>
              <li className={styles.menu__item}>
                <LinkDropdown listLinks={listServices} name="услуги" />
              </li>
              <li className={styles.menu__item}>
                <a href="#" key="уникальный номер" className={styles.menu__link}>вакансии</a>
              </li>
              <li className={styles.menu__item}>
                <a href="#" key="уникальный номер" className={styles.menu__link}>новости</a>
              </li>
              <li className={styles.menu__item}>
                <LinkDropdown listLinks={listAgreements} name="соглашения" />
              </li>
              {/* тут если регистрация или вход сделан то запись меняется на имя */}
              <li className={styles.menu__item}>
                <div className={styles.edge}></div>
              </li>
              <li className={styles.menu__item}>
                <a href="#" key="уникальный номер" className={styles.menu__link}>Юлий Цезарь</a>
              </li>
              {/* или кнопки если небыло входа */}
              {/* <li className={styles.menu__item}>
                <ButtonEmpty name="войти" />
              </li>
              <li className={styles.menu__item}>
                <ButtonFilled name="зарегистрироваться" />
              </li> */}
            </ul>

          </nav>
        </div>
      </Conteiner>
    </header>
  )
}
{/* возможное описание https://www.anywayanyday.com/cms/pages/hotels-offer/ 🎈 */ }