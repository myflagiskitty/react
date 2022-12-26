import React from 'react';
import styles from './Calendar.module.css';
import ButtonClearOrApply from "../ButtonClearOrApply/ButtonClearOrApply";
// Oн пока не работает :(
export default function Calendar() {

  return (
    <div className={styles.box}>

      <div className={styles.row}>
        <button className={styles.arrow}>arrow_back</button>
        <h2 className={styles.header}>Август 2019</h2>
        <button className={styles.arrow}>arrow_forward</button>
      </div>

      <div className={styles.gridContainer}>

        <div className={styles.gridWeek}>Пн</div>
        <div className={styles.gridWeek}>Вт</div>
        <div className={styles.gridWeek}>Ср</div>
        <div className={styles.gridWeek}>Чт</div>
        <div className={styles.gridWeek}>Пт</div>
        <div className={styles.gridWeek}>Сб</div>
        <div className={styles.gridWeek}>Вс</div>

        <button className={styles.gridMonth}>29</button>
        <button className={styles.gridMonth}>30</button>
        <button className={styles.gridMonth}>31</button>
        <button className={styles.gridCurrentMonth}>1</button>
        <button className={styles.gridCurrentMonth}>2</button>
        <button className={styles.gridCurrentMonth}>3</button>
        <button className={styles.gridCurrentMonth}>4</button>

        <button className={styles.gridCurrentMonth}>5</button>
        <button className={styles.gridCurrentMonth}>6</button>
        <button className={styles.gridCurrentMonth}>7</button>
        <button className={styles.styleOnClickOneDay}>8</button>
        <button className={styles.gridCurrentMonth}>9</button>
        <button className={styles.gridCurrentMonth}>10</button>
        <button className={styles.gridCurrentMonth}>11</button>

        <button className={styles.gridCurrentMonth}>12</button>
        <button className={styles.gridCurrentMonth}>13</button>
        <button className={styles.gridCurrentMonth}>14</button>
        <button className={styles.gridCurrentMonth}>15</button>
        <button className={styles.gridCurrentMonth}>16</button>
        <button className={styles.gridCurrentMonth}>17</button>
        <button className={styles.gridCurrentMonth}>18</button>

        <div className={styles.halfLeft}><button className={styles.styleOnClickPeriod}>19</button></div>
        <button className={styles.period}>20</button>{/*как закрасить только пол ячейкм?  */}
        <button className={styles.period}>21</button>
        <button className={styles.period}>22</button>
        <div className={styles.halfRight}><button className={styles.styleOnClickPeriod}>23</button></div>
        <button className={styles.gridCurrentMonth}>24</button>
        <button className={styles.gridCurrentMonth}>25</button>

        <button className={styles.gridCurrentMonth}>26</button>
        <button className={styles.gridCurrentMonth}>27</button>
        <button className={styles.gridCurrentMonth}>28</button>
        <button className={styles.gridCurrentMonth}>29</button>
        <button className={styles.gridCurrentMonth}>30</button>
        <button className={styles.gridCurrentMonth}>31</button>
        <button className={styles.gridMonth}>1</button>
      </div>

      <div className={styles.row}>
        <ButtonClearOrApply onClick="" name="очистить" />
        <ButtonClearOrApply onClick="" name="применить" />
      </div>

    </div>
  );
};
