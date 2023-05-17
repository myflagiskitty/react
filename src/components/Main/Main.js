import React from 'react';
import styles from './Main.module.css';
import Wallpaper from "./Wallpaper.jpg";
// import Conteiner from "../Conteiner/Conteiner"
import BoxCards from "../BoxCards/BoxCards"

export default function Main(props) {

  return (
    <main className={styles.page}>
      <div className={styles.page__main_block + ' ' + styles.main_block}>
        <div className={styles.main_block__container + ' ' + styles._container}>{/* ограничивающий контейнер*/}
          {/*  <Conteiner>*/}{/* ограничивающий контейнер   _container*/}
          <div className={styles.main_block__body}>
            
            <div className={styles.main_block__card}> <BoxCards /></div>
            <div className={styles.main_block__tex}>Лучшие номера для вашей работы, отдыха и просто вдохновения</div>
            
          </div>
          {/* </Conteiner> */}
        </div>

        <div className={styles.main_block__image + ' ' + styles._ibg}>
          <img src={Wallpaper} alt="Wallpaper" />{/* className={styles.image__wallpaper} */}
        </div>
      </div>
    </main>
  )
};