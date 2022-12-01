import React from "react";

import Pagination from "./Pagination/Pagination";
import PageNumber from "./PageNumber/PageNumber";
import ContainerButton from "./ContainerButton/ContainerButton";
import ButtonFilledArrow from "./ButtonFilledArrow/ButtonFilledArrow";
import Input from "./Input/Input";
import InputDate from "./InputDate/InputDate";
import InputDropdown from "./InputDropdown/InputDropdown";
import Counter from "./Counter/Counter";
import BoxCards from "./BoxCards/BoxCards";
import HeadersCards from "./HeadersCards/HeadersCards";
import Calendar from "./Calendar/Calendar";

import InputArrivalAndDeparture from "./InputArrivalAndDeparture/InputArrivalAndDeparture";

export default function App() {

  return (
    <div>

      {/* <ContainerButton/> */}
      <ButtonFilledArrow names="ПЕРЕЙТИ К ОПЛАТЕ" />

      {/* <Pagination>
        <ButtonFilled names="1" />
        <PageNumber>2</PageNumber>
        <PageNumber>3</PageNumber>
        <PageNumber>...</PageNumber>
        <PageNumber>15</PageNumber>
        <ButtonFilledArrow />
      </Pagination> */}

      <Input placeholder="Email" name="" type="email" />
      
      <Input placeholder="Пароль" type="password"/>
      <Input placeholder="Имя" type="text"/>
      <Input placeholder="Фамилия" type="text"/>
      <InputDropdown/>
      {/* просто переделать на обычный */}<InputDate placeholder="дд.мм.гггг" type="date"/>

      <HeadersCards name="Найдём номера под ваши пожелания"/>

      

      <BoxCards/>
      <InputArrivalAndDeparture/>
      <Calendar/>

    </div>
  );
};

