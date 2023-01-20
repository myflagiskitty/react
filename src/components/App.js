
import React from "react";
import BoxCards from "./BoxCards/BoxCards"
import Calendar from "./Calendar/Calendar"
// -----------серединка------
import StarRating from "./StarRating/StarRating"
import LikeButton from "./LikeButton/LikeButton"
import Toggle from "./Toggle/Toggle"
import Radio from "./Radio/Radio"
import Checkbox from "./Checkbox/Checkbox"
// ----------------------------------------
import ButtonClearOrApply from "./ButtonClearOrApply/ButtonClearOrApply"
import ButtonEmpty from "./ButtonEmpty/ButtonEmpty"
import ButtonFilled from "./ButtonFilled/ButtonFilled"
import ButtonFilledArrow from "./ButtonFilledArrow/ButtonFilledArrow"
import Counter from "./Counter/Counter"

import Dropdown from "./Dropdown/Dropdown"
import DropdownWithouBtn from "./DropdownWithouBtn/DropdownWithouBtn"
import HeadersCards from "./HeadersCards/HeadersCards"
import Input from "./Input/Input"
import InputArrivalAndDeparture from "./InputArrivalAndDeparture/InputArrivalAndDeparture"

import InputDate from "./InputDate/InputDate"
import LinkLabel from "./LinkLabel/LinkLabel"
import NewDropdown from "./NewDropdown/NewDropdown"
import Pagination from "./Pagination/Pagination"
import RoomCard from "./RoomCard/RoomCard"
import FullDateOfStay from "./FullDateOfStay/FullDateOfStay"

export default function App() {
  return (
    <>
      {/* =======================карточки===========================*/}
      {/* <BoxCards /> - начато и незавершено
          <RoomCard /> - пустое значение
          <Calendar /> 
      */}
      {/* =======================мини-элементы===========================*/}
      {/*<Counter />
         <ButtonClearOrApply name="применить/очистить"/> 
         <HeadersCards name="Заголовок"/>
      */}
      
      


      {/* <Dropdown />- такой же элемент как NewDropdown, только не работает кнопка применить:( не знаю есть он гдето в проекте поэтому не удаляю*/}



{/* ======================= 1 первая колонка ================================*/}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Input placeholder="Email" type="email" />
        <NewDropdown />  
        <InputDate placeholder="ДД.ММ.ГГГГ" type="date" />
        <InputArrivalAndDeparture placeholder="ДД.ММ.ГГГГ" type="date" header="Загловок"/>
        <FullDateOfStay/>
        {/*<DropdownWithouBtn /> */}
      </div>

{/* =======================средняя колонка ================================*/}
      {/* <div style={{ display: "flex", flexDirection: "column" }}>
        <Checkbox header1="Можно курить" header2="Можно с питомцами" header3="Можно пригласить гостей (до 10 человек)" />
        <Radio header1="Мужчина" header2="Женщина" />
        <Toggle header="Получать спецпредложения" />
        <LikeButton />
        <StarRating />
      </div> */}

{/* =======================третья колонка ================================*/}
      {/* <div style={{ display: "flex", flexDirection: "column" }}>
        <ButtonFilled />
        <ButtonEmpty />
        <ButtonFilledArrow />
        <LinkLabel /> - ссылка пустое значение
        <Pagination /> пусто
      </div> 
      */}

    </>
  );
};